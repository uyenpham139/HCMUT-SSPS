package com.ssps.backend.printer;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PrinterRepository extends MongoRepository<Printer, String> {
    // You can add custom queries if needed later
    List<Printer> findByStatus(String status);
    List<Printer> findByLocation(String location);
    List<Printer> findByStatusAndLocation(String status, String location);

    @Query(value = "{}", fields = "{ 'location': 1 }")
    List<Printer> findDistinctLocations();
}
