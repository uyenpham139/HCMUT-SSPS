package com.ssps.backend.buyreceipt;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "buy_receipts")
public class BuyReceipt {

    @Id
    private String id; // Unique receipt ID
    private String userId; // User who made the purchase
    private int pagesPurchased; // Number of pages purchased
    private double totalCost; // Total cost of the purchase
    private LocalDateTime purchaseDate; // Timestamp of the purchase

    // Getters and setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public int getPagesPurchased() {
        return pagesPurchased;
    }

    public void setPagesPurchased(int pagesPurchased) {
        this.pagesPurchased = pagesPurchased;
    }

    public double getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(double totalCost) {
        this.totalCost = totalCost;
    }

    public LocalDateTime getPurchaseDate() {
        return purchaseDate;
    }

    public void setPurchaseDate(LocalDateTime purchaseDate) {
        this.purchaseDate = purchaseDate;
    }
}
