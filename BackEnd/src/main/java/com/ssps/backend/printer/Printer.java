package com.ssps.backend.printer;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "printers")
public class Printer {

    @Id
    private String id;
    private String location; // Store location like "on campus b4"
    private String status; // Printer status like "available", "in use", etc.
    private String model;
    private int paperCapacity;

    // New fields
    private int requestsReceived =0;
    private int requestsProcessing=0;
    private int requestsProcessed=0;
    private int paperAvailable;

    // Getters and setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getPaperCapacity() {
        return this.paperCapacity;
    }

    public void setPaperCapacity(int paperCapacity) {
        this.paperCapacity = paperCapacity;
    }

    public int getRequestsReceived() {
        return this.requestsReceived;
    }

    public int getRequestsProcessing() {
        return this.requestsProcessing;
    }

    public int getRequestsProcessed() {
        return this.requestsProcessed;
    }

    public int getPaperAvailable() {
        return this.paperAvailable;
    }

    public void setRequestsReceived(int requestsReceived) {
        this.requestsReceived = requestsReceived;
    }

    public void setRequestsProcessing(int requestsProcessing) {
        this.requestsProcessing = requestsProcessing;
    }

    public void setRequestsProcessed(int requestsProcessed) {
        this.requestsProcessed = requestsProcessed;
    }

    public void setPaperAvailable(int paperAvailable) {
        this.paperAvailable = paperAvailable;
    }
}
