package com.ssps.backend.policy;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/policies")
public class SystemPolicyController {
    private final SystemPolicyService systemPolicyService;

    public SystemPolicyController(SystemPolicyService systemPolicyService) {
        this.systemPolicyService = systemPolicyService;
    }

    @GetMapping
    public ResponseEntity<SystemPolicy> getPolicy() {
        return ResponseEntity.ok(systemPolicyService.getPolicy());
    }

    @PutMapping
    public ResponseEntity<SystemPolicy> updatePolicy(@RequestBody SystemPolicy updatedPolicy) {
        systemPolicyService.updatePolicy(updatedPolicy);
        return ResponseEntity.ok(systemPolicyService.getPolicy());
    }
}
