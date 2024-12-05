package com.ssps.backend.buyreceipt;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/receipts")
public class BuyReceiptController {

    private final BuyReceiptRepository buyReceiptRepository;

    public BuyReceiptController(BuyReceiptRepository buyReceiptRepository) {
        this.buyReceiptRepository = buyReceiptRepository;
    }

    // Add a new receipt
    @PostMapping
    public ResponseEntity<BuyReceipt> addReceipt(@RequestBody BuyReceipt receipt) {
        receipt.setPurchaseDate(LocalDateTime.now());
        BuyReceipt savedReceipt = buyReceiptRepository.save(receipt);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedReceipt);
    }

    // Get all receipts
    @GetMapping
    public List<BuyReceipt> getAllReceipts() {
        return buyReceiptRepository.findAll();
    }

    // Get all receipts for a specific user
    @GetMapping("/user/{userId}")
    public List<BuyReceipt> getReceiptsByUser(@PathVariable String userId) {
        return buyReceiptRepository.findByUserId(userId);
    }

    // Get a specific receipt by ID
    @GetMapping("/{id}")
    public ResponseEntity<BuyReceipt> getReceiptById(@PathVariable String id) {
        return buyReceiptRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    // Delete a receipt by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReceiptById(@PathVariable String id) {
        if (buyReceiptRepository.existsById(id)) {
            buyReceiptRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
}
