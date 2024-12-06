package com.ssps.backend.auth;

public class AuthResponse {
    private final String displayName;
    private final String username;
    private final String role;
    private final int paperBalance;

    // Constructor
    public AuthResponse(String displayName, String username, String role, int paperBalance) {
        this.displayName = displayName;
        this.username = username;
        this.role = role;
        this.paperBalance = paperBalance;
    }

    // Getters
    public String getDisplayName() {
        return displayName;
    }

    public String getUsername() {
        return username;
    }

    public String getRole() {
        return role;
    }

    public int getPaperBalance() {
        return paperBalance;
    }

    @Override
    public String toString() {
        return "AuthResponse{" +
                "displayName='" + displayName + '\'' +
                ", username='" + username + '\'' +
                ", role='" + role + '\'' +
                ", paperBalance=" + paperBalance +
                '}';
    }
}
