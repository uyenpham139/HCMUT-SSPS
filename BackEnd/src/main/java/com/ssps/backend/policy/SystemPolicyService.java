package com.ssps.backend.policy;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Service;


@Service
public class SystemPolicyService {
    private final SystemPolicyRepository repository;
    private SystemPolicy systemPolicy;

    public SystemPolicyService(SystemPolicyRepository repository) {
        this.repository = repository;
    }

    @PostConstruct
    public void initializePolicy() {
        // Check if the policy exists in the database
        systemPolicy = repository.findById("system_policy").orElseGet(() -> {
            SystemPolicy defaultPolicy = new SystemPolicy();
            repository.save(defaultPolicy); // Save the default policy
            return defaultPolicy;
        });
    }

    public SystemPolicy getPolicy() {
        return systemPolicy;
    }

    public void updatePolicy(SystemPolicy updatedPolicy) {
        systemPolicy.setDefaultPageAllocation(updatedPolicy.getDefaultPageAllocation());
        systemPolicy.setMaxFileSize(updatedPolicy.getMaxFileSize());
        systemPolicy.setPermittedFileTypes(updatedPolicy.getPermittedFileTypes());
        systemPolicy.setPrintingCostPerPage(updatedPolicy.getPrintingCostPerPage());
        repository.save(systemPolicy); // Save changes to the database
    }
}
