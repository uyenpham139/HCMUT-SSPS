package com.ssps.backend.printer;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PrintHistoryRepository extends MongoRepository<PrintHistory, String> {

    // Find all print history for a specific student
    List<PrintHistory> findByStudentId(String studentId);

    // Find all print history for a specific printer
    List<PrintHistory> findByPrinterId(String printerId);

    // Find print history by status (optional)
    List<PrintHistory> findByStatus(String status);

    // Find print history within a specific paper size
    List<PrintHistory> findByPaperSize(String paperSize);
}
