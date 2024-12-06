package com.ssps.backend.user;

import com.ssps.backend.buyreceipt.BuyReceipt;
import com.ssps.backend.buyreceipt.BuyReceiptRepository;
import com.ssps.backend.buyreceipt.PurchaseRequest;
import com.ssps.backend.policy.SystemPolicy;
import com.ssps.backend.policy.SystemPolicyController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpSession;

import java.time.LocalDateTime;
import java.util.Collections;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserRepository userRepository;
    private final SystemPolicyController systemPolicyController;
    private final BuyReceiptRepository buyReceiptRepository;

    public UserController(UserRepository userRepository, SystemPolicyController systemPolicyController, BuyReceiptRepository buyReceiptRepository) {
        this.userRepository = userRepository;
        this.systemPolicyController = systemPolicyController;
        this.buyReceiptRepository = buyReceiptRepository;
    }

    // Endpoint to buy paper and update paper balance
    @PostMapping("/buy-paper")
    public ResponseEntity<?> buyPaper(@RequestBody PurchaseRequest request, HttpSession session) {
        User user = (User) session.getAttribute("user");
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Collections.singletonMap("message", "Not logged in"));
        }

        if (request.getQuantity() <= 0 || request.getTotalCost() <= 0) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Collections.singletonMap("message", "Invalid purchase details"));
        }

        // Update the user's paper balance
        user.addPaperBalance(request.getQuantity());
        userRepository.save(user);

        // Create a new BuyReceipt
        BuyReceipt receipt = new BuyReceipt();
        receipt.setUserId(user.getId());
        receipt.setPagesPurchased(request.getQuantity());
        receipt.setTotalCost(request.getTotalCost());
        receipt.setPurchaseDate(LocalDateTime.now());

        // Save the receipt
        buyReceiptRepository.save(receipt);

        return ResponseEntity.ok(Collections.singletonMap("message", "Paper purchase successful!"));
    }


}
