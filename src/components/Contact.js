import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PostbaseURL =
  "https://react-training-mobcoder-default-rtdb.firebaseio.com/userdata.json";

function Contact() {
  const [inputValues, setInputValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
  });

  const [validation, setValidation] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
  });

  //handle submit updates
  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }

  const checkValidation = () => {
    let errors = validation;

    //first Name validation
    const reg = /^[a-zA-Z\s]+$/;
    if (!inputValues.firstname.trim()) {
      errors.firstname = "First name is required";
    } else if (!inputValues.firstname.match(reg)) {
      errors.firstname = "Please enter a valid first name";
    } else {
      errors.firstname = "";
    }

    //last Name validation
    const regs = /^[a-zA-Z\s]+$/;
    if (!inputValues.lastname.trim()) {
      errors.lastname = "Last name is required";
    } else if (!inputValues.lastname.match(regs)) {
      errors.lastname = "Please enter a valid last name";
    } else {
      errors.lastname = "";
    }

    // email validation
    const emailCond = "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$";
    if (!inputValues.email.trim()) {
      errors.email = "Email is required";
    } else if (!inputValues.email.match(emailCond)) {
      errors.email = "Please enter a valid email address";
    } else {
      errors.email = "";
    }

    //Phone number validations
    const regex = "^[1-9]{10}";
    if (!inputValues.phonenumber.trim()) {
      errors.phonenumber = "Phone number is required";
    } else if (!inputValues.phonenumber.match(regex)) {
      errors.phonenumber = "Enter a valid phone number";
    } else {
      errors.phonenumber = "";
    }

    setValidation(errors);
  };

  useEffect(() => {
    checkValidation();
  }, [inputValues]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      validation.email === "" &&
      validation.firstname === "" &&
      validation.lastname === "" &&
      validation.phonenumber === ""
    ) {
      console.log("jnvhjde", inputValues);

      const payload = {
        firstname: inputValues.firstname,
        lastname: inputValues.lastname,
        email: inputValues.email,
        phonenumber: inputValues.phonenumber,
      };

      axios({
        method: "post",
        url: PostbaseURL,
        data: JSON.stringify(payload), 
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        console.log(response);
        navigate("/");
      });

      // fetch(
      //   "https://react-training-mobcoder-default-rtdb.firebaseio.com/userdata.json",
      //   {
      //     method: "POST",
      //     body: JSON.stringify(inputValues),
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     mode:'cors',
      //   }
      // ).then((res) => {
      //   console.log(res);
      //   navigate('/');
      // });

      
    } else {
      alert("Please check validation");
    }
  };

  return (
    <div>
      <Header />
      <br></br>
      <h3>Add Data to database</h3>
      <hr></hr>
      <br></br>
      <div className="container">
        <form id="registrationForm">
          <div className="form-control">
            <input
              placeholder="First Name"
              type="string"
              name="firstname"
              id="firstname"
              className="input-field"
              onChange={(e) => handleChange(e)}
              value={inputValues.firstname}
            />
            {validation.firstname && <p>{validation.firstname}</p>}
          </div>
          <div className="form-control">
            <input
              placeholder="Last Name"
              type="string"
              id="lastname"
              name="lastname"
              className="input-field"
              onChange={(e) => handleChange(e)}
              value={inputValues.lastname}
            />
            {validation.lastname && <p>{validation.lastname}</p>}
          </div>
          <div className="form-control">
            <input
              placeholder="email"
              type="email"
              name="email"
              className="input-field"
              onChange={(e) => handleChange(e)}
              value={inputValues.email}
            />
          </div>
          {validation.email && <p>{validation.email}</p>}

          <div className="form-control">
            <input
              placeholder="phone number"
              type="number"
              name="phonenumber"
              className="input-field"
              onChange={(e) => handleChange(e)}
              value={inputValues.phonenumber}
            />
          </div>
          {validation.phonenumber && <p>{validation.phonenumber}</p>}
          <br></br>
          <button type="submit" id="submit-button" onClick={handleSubmit}>
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
