package com.ssps.backend.policy;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "system_policy")
public class SystemPolicy {
    @Id
    private String id = "system_policy"; // Fixed ID to ensure only one document
    private int defaultPageAllocation = 100; // Default values
    private int maxFileSize = 10;
    private String[] permittedFileTypes = {"PDF", "DOCX", "TXT"};
    private double printingCostPerPage = 500;

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getDefaultPageAllocation() {
        return defaultPageAllocation;
    }

    public void setDefaultPageAllocation(int defaultPageAllocation) {
        this.defaultPageAllocation = defaultPageAllocation;
    }

    public int getMaxFileSize() {
        return maxFileSize;
    }

    public void setMaxFileSize(int maxFileSize) {
        this.maxFileSize = maxFileSize;
    }

    public String[] getPermittedFileTypes() {
        return permittedFileTypes;
    }

    public void setPermittedFileTypes(String[] permittedFileTypes) {
        this.permittedFileTypes = permittedFileTypes;
    }

    public double getPrintingCostPerPage() {
        return printingCostPerPage;
    }

    public void setPrintingCostPerPage(double printingCostPerPage) {
        this.printingCostPerPage = printingCostPerPage;
    }
}
