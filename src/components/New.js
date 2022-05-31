import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PostbaseURL =
  "https://react-training-mobcoder-default-rtdb.firebaseio.com/userdata.json";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),

  firstname: Yup.string()
    .min(3, "firstname must be 3 characters at minimum")
    .max(15, "firstname must be 15 characters at maximum")
    .required("firstname is required"),

  lastname: Yup.string()
    .min(3, "lastname must be 3 characters at minimum")
    .max(15, "lastname must be 15 characters at maximum")
    .required("firstname is required"),

  phonenumber: Yup.string()
    .max(10, "phone numnber must have 10 digit")
    .min(10, "phone numnber must have 10 digit")
    .required("phone number is required"),
});

function New() {
 const navigate = useNavigate();

  return (
    <div>
      <Header />
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Formik
              initialValues={{
                email: "",
                firstname: "",
                lastname: "",
                phonenumber: "",
              }}
              validationSchema={LoginSchema}
              onSubmit={(values) => {
                
                console.log(values);

                axios({
                  method: "post",
                  url: PostbaseURL,
                  data: JSON.stringify(values),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }).then((response) => {
                  console.log(response);
                  navigate("/");
                });
              }}
            >
              {({ touched, errors, isSubmitting }) =>
                !isSubmitting ? (
                  <div>
                    <div className="row mb-1">
                      <div className="col-lg-12 text-center">
                        <h3 className="mt-4">Simple Form</h3>
                      </div>
                    </div>
                    <Form>
                      <div className="form-group">
                        <label htmlFor="firstname" className="mt-3">
                          firstname
                        </label>
                        <Field
                          type="text"
                          name="firstname"
                          placeholder="Enter firstname"
                          className={`mt-2 form-control
                      ${
                        touched.firstname && errors.firstname
                          ? "is-invalid"
                          : ""
                      }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="firstname"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="lastname" className="mt-3">
                          Last Name
                        </label>
                        <Field
                          type="text"
                          name="lastname"
                          placeholder="Enter lastname"
                          className={`mt-2 form-control
                      ${
                        touched.lastname && errors.lastname ? "is-invalid" : ""
                      }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="lastname"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Field
                          type="email"
                          name="email"
                          placeholder="Enter email"
                          autocomplete="off"
                          className={`mt-2 form-control
                      ${touched.email && errors.email ? "is-invalid" : ""}`}
                        />

                        <ErrorMessage
                          component="div"
                          name="email"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="phonenumber" className="mt-3">
                          Phone Number
                        </label>
                        <Field
                          type="number"
                          name="phonenumber"
                          placeholder="Enter phonenumber"
                          className={`mt-2 form-control
                      ${
                        touched.phonenumber && errors.phonenumber
                          ? "is-invalid"
                          : ""
                      }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="phonenumber"
                          className="invalid-feedback"
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-success btn-block mt-4"
                      >
                        Submit
                      </button>
                    </Form>
                  </div>
                ) : (
                  <div>
                    <h1 className="p-3 mt-5">Form Submitted</h1>
                  </div>
                )
              }
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
