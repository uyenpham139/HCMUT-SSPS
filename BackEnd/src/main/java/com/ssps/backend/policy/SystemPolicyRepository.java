package com.ssps.backend.policy;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface SystemPolicyRepository extends MongoRepository<SystemPolicy, String> {
}
