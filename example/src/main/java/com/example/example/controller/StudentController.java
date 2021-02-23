package com.example.example.controller;

import com.example.example.model.Student;
import com.example.example.repository.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import org.springframework.web.bind.annotation.RestController;

@RestController

public class StudentController {

    @Autowired
    public StudentRepository studentRepository;

    @CrossOrigin(origins = "http://localhost:3000")

    @RequestMapping(method = RequestMethod.POST, value = "/student")
    public Student save(@RequestBody Student student) {

        studentRepository.save(student);

        return student;

    }
}
