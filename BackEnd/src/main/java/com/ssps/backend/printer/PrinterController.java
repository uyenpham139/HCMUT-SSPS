package com.ssps.backend.printer;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/printers")
public class PrinterController {

    private final PrinterRepository printerRepository;

    public PrinterController(PrinterRepository printerRepository) {
        this.printerRepository = printerRepository;
    }

    // Add a printer
    @PostMapping
    public ResponseEntity<Printer> addPrinter(@RequestBody Printer printer) {
        Printer savedPrinter = printerRepository.save(printer);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedPrinter);
    }

    // Get all printers
    @GetMapping
    public List<Printer> getAllPrinters() {
        return printerRepository.findAll();
    }

    // Get a specific printer by ID
    @GetMapping("/{id}")
    public ResponseEntity<Printer> getPrinterById(@PathVariable String id) {
        return printerRepository.findById(id)
                .map(printer -> ResponseEntity.ok(printer))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    // Update printer details
    @PutMapping("/{id}")
    public ResponseEntity<Printer> updatePrinter(@PathVariable String id, @RequestBody Printer updatedPrinter) {
        return printerRepository.findById(id)
                .map(existingPrinter -> {
                    if (updatedPrinter.getLocation() != null) {
                        existingPrinter.setLocation(updatedPrinter.getLocation());
                    }
                    if (updatedPrinter.getStatus() != null) {
                        existingPrinter.setStatus(updatedPrinter.getStatus());
                    }
                    if (updatedPrinter.getModel() != null) {
                        existingPrinter.setModel(updatedPrinter.getModel());
                    }
                    if (updatedPrinter.getPaperCapacity() != 0) {
                        existingPrinter.setPaperCapacity(updatedPrinter.getPaperCapacity());
                    }
                    if (updatedPrinter.getRequestsReceived() != 0) {
                        existingPrinter.setRequestsReceived(updatedPrinter.getRequestsReceived());
                    }
                    if (updatedPrinter.getRequestsProcessing() != 0) {
                        existingPrinter.setRequestsProcessing(updatedPrinter.getRequestsProcessing());
                    }
                    if (updatedPrinter.getRequestsProcessed() != 0) {
                        existingPrinter.setRequestsProcessed(updatedPrinter.getRequestsProcessed());
                    }
                    if (updatedPrinter.getPaperAvailable() != 0) {
                        existingPrinter.setPaperAvailable(updatedPrinter.getPaperAvailable());
                    }
                    Printer savedPrinter = printerRepository.save(existingPrinter);
                    return ResponseEntity.ok(savedPrinter);
                })
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    // Delete a printer
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePrinter(@PathVariable String id) {
        return printerRepository.findById(id)
                .map(printer -> {
                    printerRepository.delete(printer);
                    return ResponseEntity.ok("Printer deleted successfully");
                })
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body("Printer not found"));
    }

    @GetMapping("/locations")
    public ResponseEntity<List<String>> getDistinctLocations() {
        List<String> locations = printerRepository.findDistinctLocations()
                .stream()
                .map(Printer::getLocation)
                .distinct()
                .toList();
        return ResponseEntity.ok(locations);
    }


}
