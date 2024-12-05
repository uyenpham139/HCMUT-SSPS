package com.ssps.backend.buyreceipt;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface BuyReceiptRepository extends MongoRepository<BuyReceipt, String> {

    // Retrieve all receipts for a specific user
    List<BuyReceipt> findByUserId(String userId);
}
