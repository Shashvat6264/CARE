import React from "react";
import Table from "react-bootstrap/Table";

import Button from 'react-bootstrap/Button'
import "./styles.css";
function OrgDashboard() {
  let organisations = [
    {
      name: "Organisation 1",
      age:"11",
      birthmark:"mole at the tip of nose"
    },
    {
        name: "Organisation 1",
        age:"11",
        birthmark:"mole at the tip of nose"
      },
      {
        name: "Organisation 1",
        age:"11",
        birthmark:"mole at the tip of nose"
      },
      {
        name: "Organisation 1",
        age:"11",
        birthmark:"mole at the tip of nose"
      },
      {
        name: "Organisation 1",
        age:"11",
        birthmark:"mole at the tip of nose"
      },
      {
        name: "Organisation 1",
        age:"11",
        birthmark:"mole at the tip of nose"
      },
  ];
  return (
    <div className="table-child mt-5 ml-5 mr-5" style={{fontFamily:"Karla"}}>
        <h1>Pending Approvals</h1>
      <Table  striped bordered hover >
        <thead>
          <tr>
            <th>#</th>
            <th style={{textAlign:"center"}}> Name</th>
            <th style={{textAlign:"center"}}>Age</th>
            <th style={{textAlign:"center"}}>Reporter</th>
            <th style={{textAlign:"center"}}>Parent</th>
            <th style={{textAlign:"center"}}>Approve/Decline</th>

          </tr>
        </thead>
        {organisations.map((org, idx) => (
          <tbody>
            <tr key={idx}>
                <td>{idx}</td>
              <td style={{textAlign:"center"}}>{org.name}</td>
              <td style={{textAlign:"center"}}>{org.age}</td>
              <td style={{textAlign:"center"}}>Ananya</td>
              <td style={{textAlign:"center"}}>Sadhvika</td>
              <td style={{textAlign:"center"}}><Button variant="success">Approve</Button> <Button variant="danger">Decline</Button></td>
              
            </tr>
          </tbody>
        ))}
      </Table>
      <h1>List of Children Under an Organization</h1>
      <Table  striped bordered hover >
        <thead>
          <tr>
            <th>#</th>
            <th style={{textAlign:"center"}}> Name</th>
            <th style={{textAlign:"center"}}>Age</th>
            <th style={{textAlign:"center"}}>Birth-Mark</th>
          </tr>
        </thead>
        {organisations.map((org, idx) => (
          <tbody>
            <tr key={idx}>
                <td>{idx}</td>
              <td style={{textAlign:"center"}}>{org.name}</td>
              <td style={{textAlign:"center"}}>{org.age}</td>
              <td style={{textAlign:"center"}}>{org.birthmark}</td>
              
            </tr>
          </tbody>
        ))}
      </Table>
      
    </div>
  );
}

export default OrgDashboard;
