
import React, { Component } from "react";
import './StudentForm.css';
import axios from 'axios';

class StudentForm extends Component {
  constructor(props) {
    super(props);


    this.state = {

      student: [],
      name: '',
      // emailId: '',    
      dob: '',
      division: 'select',

      classs: 'select',
      gender: 'select',
      formErrors: {}
    };
    this.initialState = this.state;

  }


  calculate_age = (dob1) => {
    var today = new Date();
    var birthDate = new Date(dob1);  // create a date object directly from `dob1` argument
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    var age = null
    // console.log(age_now);

    if (age_now > 5 && age_now < 80) {
      age = true;
    }
    else {
      age = false;
    }
    // console.log(age)
    return age;
  }

  handleFormValidation() {
    const { name, dob, division, classs, gender } = this.state;
    let formErrors = {};
    let formIsValid = true;
    let age_latest = null;

    // Name     
    if (!name) {
      formIsValid = false;
      formErrors["nameErr"] = "name is required";
    }
    else {
      var v = /^[a-zA-Z\s]+$/;
      // /^[a-zA-Z]+$/;
      if (!v.test(name)) {
        formIsValid = false;
        formErrors["nameErr"] = "only letters and spaces";

      }
    }





    // DOB    
    if (!dob) {
      formIsValid = false;
      formErrors["dobErr"] = "Date of birth is required.";
    }
    else {
      var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;
      age_latest = this.calculate_age(dob);
      if (!pattern.test(dob) && age_latest === false) {
        formIsValid = false;
        formErrors["dobErr"] = "Invalid date of birth";
      }

    }

    //  Division   
    if (division === '' || division === "select") {
      formIsValid = false;
      formErrors["divisionErr"] = "Select division.";
    }

    //   radio

    if (gender === '' || gender === "select") {
      formIsValid = false;
      formErrors["genderErr"] = "Select gender.";
    }
    // Class    
    if (classs === '' || classs === "select") {
      formIsValid = false;
      formErrors["classsErr"] = "Select Class.";
    }

    this.setState({ formErrors: formErrors });
    return formIsValid;
  }



  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();


    if (this.handleFormValidation()) {
      alert('You have been successfully registered.')
      this.setState(this.initialState)
      console.log(this.state)

      axios.post("http://localhost:6039/student", this.state)
        .then(response => {
          if (response.data != null) {
            this.setState({ "show": true });
            setTimeout(() => this.setState({ "show": false }), 3000);
          }
          else { this.setState({ "show": false }); }
        });
      this.setState(this.initialState);
    }
  }
  render() {

    const { nameErr, dobErr, divisionErr, classsErr, genderErr } = this.state.formErrors;

    return (
      <div className="formDiv">
        <div><h1 style={{ textAlign: "center" }} >Student information </ h1>   </div>

        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="name"><b>Name:</b></label>
              <input type="text" name="name"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="Your name.."
                className={nameErr ? ' showError' : ''} />
              {nameErr &&
                <div style={{ color: "red", paddingBottom: 10 }}>{nameErr}</div>
              }

            </div>
            <div>
              <label htmlFor="text"><b>Date of Birth:</b></label>
              <input type="date" name="dob"
                value={this.state.dob}
                onChange={this.handleChange}
                placeholder="DD/MM/YYYY.."
                className={dobErr ? ' showError' : ''} />
              {dobErr &&
                <div style={{ color: "red", paddingBottom: 10 }}>{dobErr}</div>
              }
            </div>
            <div>
              <label htmlFor="classs"><b>Class:</b></label>
              <select name="classs"
                value={this.state.classs}
                onChange={this.handleChange}
                className={classsErr ? ' showError' : ''} >
                <option value="select">--Select--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
               

              </select>
              {classsErr &&
                <div style={{ color: "red", paddingBottom: 10 }}>{classsErr}</div>
              }
              <div>
                <label htmlFor="division"><b>Division:</b></label>
                <select name="division" onChange={this.handleChange}
                  className={divisionErr ? ' showError' : ''}
                  value={this.state.division} >
                  <option value="select">--Select--</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </select>
                {divisionErr &&
                  <div style={{ color: "red", paddingBottom: 10 }}>{divisionErr}</div>
                }
              </div>
              <div className="gender">
                <label><b>Gender:</b></label>
                <input type="radio"

                  name="gender"
                  value="select"
                  checked={this.state.gender === "select"}
                  onChange={this.handleChange} /><b>Select:</b>
                <input type="radio"

                  name="gender"
                  value="Male"
                  checked={this.state.gender === "Male"}
                  onChange={this.handleChange} />Male
                             <input type="radio"
                  name="gender"
                  value="Female"
                  checked={this.state.gender === "Female"}
                  onChange={this.handleChange} />Female
                             <br></br>

                {genderErr &&
                  <div style={{ color: "red", paddingBottom: 10 }}>{genderErr}</div>
                }
              </div>

              <div className="submit">
                <button type="submit">Submit</button>

              </div>
            </div>
          </form>
        </div>
      </div >
    )
  }
}
export default StudentForm;