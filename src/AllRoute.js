import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Send from "./components/Send";
import  New  from "./components/New";


function AllRoute() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/send' exact element={<Send />} />
          <Route path='/formik' exact element={<New />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default AllRoute;
