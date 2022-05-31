import React from "react";
import { useRef, useState } from "react";
import Header from "./Header";
// import { useNavigate } from "react-router-dom";

function Send() {
  const firstname = useRef(null);
  const lastname = useRef(null);
  const email = useRef(null);
  const phonenumber = useRef(null);

  const [validation, setValidation] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
  });

  let errors = validation;
  //first Name validation
  function validatefname() {
    console.log(firstname.current.value);
    const reg = /^[a-zA-Z\s]+$/;
    if (firstname.current.value === "") {
      errors.firstname = "First name is required";
    } else if (!firstname.current.value.match(reg)) {
      errors.firstname = "Please enter a valid first name";
    } else {
      errors.firstname = "";
    }

    setValidation(errors);
  }

  function validatelname() {
    //last Name validation
    const regs = /^[a-zA-Z\s]+$/;
    if (lastname.current.value === "") {
      errors.lastname = "Last name is required";
    } else if (!lastname.current.value.match(regs)) {
      errors.lastname = "Please enter a valid last name";
    } else {
      errors.lastname = "";
    }
    setValidation(errors);
  }

  function validateemail() {
    // email validation
    const emailCond = "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$";
    if (email.current.value === "") {
      errors.email = "Email is required";
    } else if (!email.current.value.match(emailCond)) {
      errors.email = "Please enter a valid email address";
    } else {
      errors.email = "";
    }
    setValidation(errors);
  }

  function validatephone() {
    //Phone number validations
    const regex = "^[1-9]{10}";
    if (phonenumber.current.value === "") {
      errors.phonenumber = "Phone number is required";
    } else if (!phonenumber.current.value.match(regex)) {
      errors.phonenumber = "Enter a valid phone number";
    } else {
      errors.phonenumber = "";
    }
    setValidation(errors);
  }
  const checkValidation = () => {
    validatefname();
    validatelname();
    validateemail();
    validatephone();
    setValidation(errors);
  };

  // const navigate = useNavigate();

  function submitForm(e) {
    e.preventDefault();

    if (checkValidation) {
      let input = {
        firstname: firstname.current.value,
        lastname: lastname.current.value,
        email: email.current.value,
        phonenumber: phonenumber.current.value,
      };

      console.log(input, "hahsdfkjh");
      // fetch(
      //   "https://react-training-mobcoder-default-rtdb.firebaseio.com/userdata.json",
      //   {
      //     method: "POST",
      //     body: JSON.stringify(input),
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     mode: "cors",
      //   }
      // ).then((res) => {
      //   console.log(res);
      //   navigate("/");
      // });
    }
  }

  // const onBlurHandler = (refInput) => {
  // if (refInput.current?.value === "") {
  //    alert(`${refInput.current.name} is empty!`);
  // }

  return (
    <div>
      <Header />
      <br></br>
      <h3>Add Data to database using useRef Hook</h3>
      <hr></hr>
      <br></br>
      <form className="container" style={{ padding: "20px 20px" }}>
        <div>
          First Name<br></br>
          <input
            placeholder="first name"
            type="text"
            name="firstname"
            className="input-field"
            onChange={validatefname}
            ref={firstname}
          />
          {validation.firstname && <p>{validation.firstname}</p>}
        </div>
        <br></br>
        <div>
          Last Name<br></br>
          <input
            placeholder="last name"
            type="text"
            name="lastname"
            className="input-field"
            onChange={validatelname}
            ref={lastname}
          />
          {validation.lastname && <p>{validation.lastname}</p>}
        </div>
        <br></br>
        <div>
          Email<br></br>
          <input
            placeholder="email"
            type="email"
            name="email"
            className="input-field"
            onChange={validateemail}
            ref={email}
          />
          {validation.email && <p>{validation.email}</p>}
        </div>
        <br></br>
        Phone Number<br></br>
        <input
          placeholder="phone number"
          type="number"
          name="phonenumber"
          className="input-field"
          onChange={validatephone}
          ref={phonenumber}
        />
        {validation.phonenumber && <p>{validation.phonenumber}</p>}
        <br></br>
        <br></br>
        <button type="submit" id="submit-button" onClick={submitForm}>
          Add Data
        </button>
      </form>
    </div>
  );
}

export default Send;
