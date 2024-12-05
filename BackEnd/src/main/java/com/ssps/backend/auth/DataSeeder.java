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
        // Check if the database is empty before adding users
        if (userRepository.count() == 0) {
            // Create a sample student and admin
            User student = new User();
            student.setUsername("student1");
            student.setPassword("password123"); // Hash in production (use BCrypt)
            student.setRole("STUDENT");

            User admin = new User();
            admin.setUsername("admin1");
            admin.setPassword("adminpassword"); // Hash in production
            admin.setRole("ADMIN");

            // Save users to the database
            userRepository.save(student);
            userRepository.save(admin);
        }
    }
}
