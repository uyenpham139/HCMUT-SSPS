package com.ssps.backend.auth;

import com.ssps.backend.user.User;
import com.ssps.backend.user.UserRepository;
import org.springframework.stereotype.Service;
import jakarta.annotation.PostConstruct;

@Service
public class DataSeeder {

    private final UserRepository userRepository;

    public DataSeeder(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostConstruct
    public void seedUsers() {
        // Create or update student
        User student = userRepository.findByUsername("student1").orElse(new User());
        student.setId("2252360");
        student.setUsername("student1");
        student.setPassword("password123"); // Hash in production
        student.setRole("STUDENT");
        userRepository.save(student);

        // Create or update admin
        User admin = userRepository.findByUsername("admin1").orElse(new User());
        admin.setId("1234567");
        admin.setUsername("admin1");
        admin.setPassword("adminpassword"); // Hash in production
        admin.setRole("SPSO");
        userRepository.save(admin);
    }
}