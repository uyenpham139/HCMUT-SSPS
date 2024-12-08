package com.ssps.backend.printer;

import com.ssps.backend.user.User;
import com.ssps.backend.user.UserRepository;
import com.ssps.backend.printer.Printer;
import com.ssps.backend.printer.PrinterRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/print-history")
public class PrintHistoryController {

    private final PrintHistoryRepository printHistoryRepository;
    private final UserRepository userRepository;
    private final PrinterRepository printerRepository;

    public PrintHistoryController(PrintHistoryRepository printHistoryRepository, UserRepository userRepository, PrinterRepository printerRepository) {
        this.printHistoryRepository = printHistoryRepository;
        this.userRepository = userRepository;
        this.printerRepository = printerRepository;
    }

    // Get all print history
    @GetMapping
    public List<Map<String, Object>> getAllPrintHistoryWithNames() {
        // Fetch all print history
        List<PrintHistory> printHistories = printHistoryRepository.findAll();

        // Map each print history to include the student name
        return printHistories.stream()
                .map(history -> {
                    Map<String, Object> historyWithName = new HashMap<>();
                    historyWithName.put("id", history.getId());
                    historyWithName.put("studentId", history.getStudentId());
                    historyWithName.put("paperSize", history.getPaperSize());
                    historyWithName.put("numberOfPages", history.getNumberOfPages());
                    historyWithName.put("side", history.getSide());
                    historyWithName.put("printerId", history.getPrinterId());
                    historyWithName.put("timestamp", history.getTimestamp());

                    // Fetch the student name from the user repository
                    User student = userRepository.findById(history.getStudentId()).orElse(null);
                    historyWithName.put("studentName", student != null ? student.getDisplayName() : "Unknown");

                    return historyWithName;
                })
                .toList();
    }


    // Get print history by student ID
    @GetMapping("/student/{studentId}")
    public List<PrintHistory> getPrintHistoryByStudent(@PathVariable String studentId) {
        return printHistoryRepository.findByStudentId(studentId);
    }

    // Create a new print history entry
    @PostMapping
    public ResponseEntity<?> createPrintHistory(@RequestBody PrintHistory printHistory, HttpSession session) {
        // Ensure the user is logged in
        User user = (User) session.getAttribute("user");
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", "Not logged in"));
        }

        // Calculate the total A4 equivalent pages
        double multiplier = switch (printHistory.getPaperSize()) {
            case "A3" -> 2.0;
            case "A5" -> 0.5;
            default -> 1.0; // Default to A4
        };
        int totalPages = (int) Math.ceil(printHistory.getNumberOfPages() * multiplier);
        if ("double side".equalsIgnoreCase(printHistory.getSide())) {
            totalPages = (int) Math.ceil(totalPages / 2.0);
        }

        // Check and deduct from user's paper balance
        if (user.getPaperBalance() < totalPages) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("message", "Insufficient paper balance"));
        }
        user.deductPaperBalance(totalPages);
        userRepository.save(user);

        // Save the print history
        printHistory.setStudentId(user.getId());
        printHistoryRepository.save(printHistory);

        return ResponseEntity.ok(Map.of("message", "Print history created successfully"));
    }

    @GetMapping("/user")
    public ResponseEntity<?> getPrintHistoryForUser(HttpSession session) {
        // Ensure the user is logged in
        User user = (User) session.getAttribute("user");
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", "Not logged in"));
        }

        // Retrieve the print history for the user
        List<PrintHistory> userPrintHistory = printHistoryRepository.findByStudentId(user.getId());
        return ResponseEntity.ok(userPrintHistory);
    }

    @GetMapping("/statistics")
    public ResponseEntity<Map<String, Object>> getStatistics() {
        // Total number of prints
        long totalPrints = printHistoryRepository.count();

        // Total pages printed
        int totalPagesPrinted = printHistoryRepository.findAll().stream()
                .mapToInt(history -> {
                    double multiplier = switch (history.getPaperSize()) {
                        case "A3" -> 2.0;
                        case "A5" -> 0.5;
                        default -> 1.0; // Default to A4
                    };
                    int pages = (int) Math.ceil(history.getNumberOfPages() * multiplier);
                    if ("double side".equalsIgnoreCase(history.getSide())) {
                        pages = (int) Math.ceil(pages / 2.0);
                    }
                    return pages;
                })
                .sum();

        // Most used printer
        Map<String, Long> printerUsage = printHistoryRepository.findAll().stream()
                .collect(Collectors.groupingBy(PrintHistory::getPrinterId, Collectors.counting()));

        String mostUsedPrinter = printerUsage.entrySet().stream()
                .max(Map.Entry.comparingByValue())
                .map(Map.Entry::getKey)
                .orElse("None");

        Map<String, Object> statistics = Map.of(
                "totalPrints", totalPrints,
                "totalPagesPrinted", totalPagesPrinted,
                "mostUsedPrinter", mostUsedPrinter
        );

        return ResponseEntity.ok(statistics);
    }

    @GetMapping("/extended-statistics")
    public ResponseEntity<Map<String, Object>> getExtendedStatistics() {
        // Fetch all users excluding SPSO
        List<User> students = userRepository.findAll().stream()
                .filter(user -> !"SPSO".equalsIgnoreCase(user.getRole()))
                .toList();

        // Calculate the total number of students
        int totalStudents = students.size();

        // Calculate average prints per user
        double averagePrintsPerUser = students.stream()
                .mapToDouble(student -> printHistoryRepository.findByStudentId(student.getId()).size())
                .average()
                .orElse(0.0);

        // Get the count of printers in the AVAILABLE state
        long availablePrinters = printerRepository.findAll().stream()
                .filter(printer -> "AVAILABLE".equalsIgnoreCase(printer.getStatus()))
                .count();

        // Build the statistics map
        Map<String, Object> extendedStatistics = Map.of(
                "totalStudents", totalStudents,
                "averagePrintsPerUser", averagePrintsPerUser,
                "availablePrinters", availablePrinters
        );

        return ResponseEntity.ok(extendedStatistics);
    }


}
