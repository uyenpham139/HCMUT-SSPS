package com.ssps.backend.policy;

import org.springframework.stereotype.Component;

@Component
public class SystemPolicy {
    private int defaultPageAllocation = 100; // Default 100 pages
    private int maxFileSize = 10; // Maximum 10 MB for file uploads
    private String[] permittedFileTypes = {"PDF", "DOCX", "TXT"}; // Allowed file types
    private double printingCostPerPage = 0.1; // $0.10 per page

    // Getters and Setters
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
