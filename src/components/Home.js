import React, { useState } from "react";
import Header from "./Header";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

const baseURL =
  "https://react-training-mobcoder-default-rtdb.firebaseio.com/userdata.json";

function Home() {
  const [data, setData] = useState("");

  function Fetch() {
    axios.get(baseURL).then((response) => {
      setData(response.data);
      console.log(response.data);
    });

    // fetch("https://react-training-mobcoder-default-rtdb.firebaseio.com/userdata.json")
    //   .then(Response => {
    //     return Response.json()
    //   }).then(data => {
    //     setData(data)
    //     console.log(data)
    //   })
  }

  return (
    <div>
      <Header />
      <br></br>
      <h3>Home</h3>
      <br></br>
      <div className="container">
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(data).map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.phonenumber}</td>
                  <td>{item.email}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <br></br>
        <Button variant="primary" onClick={Fetch} type="submit">
          GetData
        </Button>
      </div>
    </div>
  );
}

export default Home;
