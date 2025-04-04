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
        student.setDisplayName("John Cena");
        student.setUsername("student1");
        student.setPassword("password123"); // Hash in production
        student.setRole("STUDENT");
        userRepository.save(student);

        User student2 = userRepository.findByUsername("student2").orElse(new User());
        student2.setId("2252273");
        student2.setDisplayName("Saddam Huce");
        student2.setUsername("student2");
        student2.setPassword("password123"); // Hash in production
        student2.setRole("STUDENT");
        userRepository.save(student2);

        // Create or update admin
        User admin = userRepository.findByUsername("admin1").orElse(new User());
        admin.setId("1234567");
        admin.setDisplayName("Joe Biden");
        admin.setUsername("admin1");
        admin.setPassword("adminpassword"); // Hash in production
        admin.setRole("SPSO");
        userRepository.save(admin);
    }
}