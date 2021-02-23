package com.example.example.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "student")
public class Student {
    // @Id

    // private long id;

    // @Id

    private String name;

    private Date dob;
    private int classs;
    private String division;
    private String gender;

    // private String id;

    public Student() {
        super();
    }

    public Student(String name, Date dob, int classs, String division, String gender) {
        super();
        // this.id = id;
        this.name = name;
        this.dob = dob;
        this.classs = classs;
        this.division = division;
        this.gender = gender;
    }

    // public String getId() {
    // return id;
    // }
    // public void setId(String id) {
    // this.id = id;
    // }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDob() {
        return dob;
    }

    public void setAge(Date dob) {
        this.dob = dob;
    }

    public int getClasss() {
        return classs;
    }

    public void setClasss(int classs) {
        this.classs = classs;
    }

    public String getdivision() {
        return division;
    }

    public void setDivision(String division) {
        this.division = division;
    }

    public String getGender() {
        return gender;
    }

    public void setGrade(String gender) {
        this.gender = gender;
    }

}
