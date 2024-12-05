package com.ssps.backend.printer;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/print-history")
public class PrintHistoryController {

    private final PrintHistoryRepository printHistoryRepository;

    public PrintHistoryController(PrintHistoryRepository printHistoryRepository) {
        this.printHistoryRepository = printHistoryRepository;
    }

    // Get all print history
    @GetMapping
    public List<PrintHistory> getAllPrintHistory() {
        return printHistoryRepository.findAll();
    }

    // Get print history by student ID
    @GetMapping("/student/{studentId}")
    public List<PrintHistory> getPrintHistoryByStudent(@PathVariable String studentId) {
        return printHistoryRepository.findByStudentId(studentId);
    }
}
