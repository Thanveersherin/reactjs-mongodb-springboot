package com.example.example.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import org.springframework.stereotype.Repository;

import com.example.example.model.Student;

@Repository
public interface StudentRepository extends MongoRepository<Student, Long> {
    // List<Student> findName(String name);
    // Student findName(String name);
}
