package com.ssps.backend.policy;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/policies")
public class SystemPolicyController {

    private final SystemPolicy systemPolicy;

    public SystemPolicyController(SystemPolicy systemPolicy) {
        this.systemPolicy = systemPolicy;
    }

    // Get current system policy
    @GetMapping
    public ResponseEntity<SystemPolicy> getPolicy() {
        return ResponseEntity.ok(systemPolicy);
    }

    // Update system policy
    @PutMapping
    public ResponseEntity<SystemPolicy> updatePolicy(@RequestBody SystemPolicy updatedPolicy) {
        if (updatedPolicy.getDefaultPageAllocation() != 0) {
            systemPolicy.setDefaultPageAllocation(updatedPolicy.getDefaultPageAllocation());
        }
        if (updatedPolicy.getMaxFileSize() != 0) {
            systemPolicy.setMaxFileSize(updatedPolicy.getMaxFileSize());
        }
        if (updatedPolicy.getPermittedFileTypes() != null) {
            systemPolicy.setPermittedFileTypes(updatedPolicy.getPermittedFileTypes());
        }
        if (updatedPolicy.getPrintingCostPerPage() != 0) {
            systemPolicy.setPrintingCostPerPage(updatedPolicy.getPrintingCostPerPage());
        }

        return ResponseEntity.ok(systemPolicy);
    }
}
