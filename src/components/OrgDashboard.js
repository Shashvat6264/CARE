// import React from "react";
// import Table from "react-bootstrap/Table";

// import Button from 'react-bootstrap/Button'
// import "./styles.css";
// function OrgDashboard() {
//   let organisationsChild = [
//     {
//       name: "Rahul Gorai",
//       age:"21",
//       birthmark:"mole at the tip of nose"
//     },
//     {
//         name: "Palkit Lohia",
//         age:"11",
//         birthmark:"mole near right ear"
//       },
      
//   ];
//   let requests  = [
//     {
//       name: "Mohit Gupta",
//       age:"21",
//       reporter:"Ananya Mahato",
//       parent:"Sadhvika",

//     },
//     {
//       name: "Manish",
//       age:"7",
//       reporter:"Harish Pandey",
//       parent:"Abhishek Kumar",

//     },
      
//   ];


//   return (
//     <div className="table-child mt-5 ml-5 mr-5" style={{fontFamily:"Karla"}}>
//         <h1>Pending Approvals</h1>
//       <Table  striped bordered hover >
//         <thead>
//           <tr>
//             <th>#</th>
//             <th style={{textAlign:"center"}}> Name</th>
//             <th style={{textAlign:"center"}}>Age</th>
//             <th style={{textAlign:"center"}}>Reporter</th>
//             <th style={{textAlign:"center"}}>Parent</th>
//             <th style={{textAlign:"center"}}>Approve/Decline</th>

//           </tr>
//         </thead>
//         {requests.map((req, idx) => (
//           <tbody>
//             <tr key={idx}>
//                 <td>{idx}</td>
//               <td style={{textAlign:"center"}}>{req.name}</td>
//               <td style={{textAlign:"center"}}>{req.age}</td>
//               <td style={{textAlign:"center"}}>{req.reporter}</td>
//               <td style={{textAlign:"center"}}>{req.parent}</td>
//               <td style={{textAlign:"center"}}><Button variant="success">Approve</Button> <Button variant="danger">Decline</Button></td>
              
//             </tr>
//           </tbody>
//         ))}
//       </Table>
//       <h1>List of Children Under an Organization</h1>
//       <Table  striped bordered hover >
//         <thead>
//           <tr>
//             <th>#</th>
//             <th style={{textAlign:"center"}}> Name</th>
//             <th style={{textAlign:"center"}}>Age</th>
//             <th style={{textAlign:"center"}}>Birth-Mark</th>
//           </tr>
//         </thead>
//         {organisationsChild.map((org, idx) => (
//           <tbody>
//             <tr key={idx}>
//                 <td>{idx}</td>
//               <td style={{textAlign:"center"}}>{org.name}</td>
//               <td style={{textAlign:"center"}}>{org.age}</td>
//               <td style={{textAlign:"center"}}>{org.birthmark}</td>
              
//             </tr>
//           </tbody>
//         ))}
//       </Table>
      
//     </div>
//   );
// }

// export default OrgDashboard;
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
 
import Button from 'react-bootstrap/Button'
import "./styles.css";
function OrgDashboard() {
  let organisations = [
    {
            name: "Rahul Gorai",
            age:"21",
            birthmark:"mole at the tip of nose"
          },
          {
              name: "Palkit Lohia",
              age:"11",
              birthmark:"mole near right ear"
            },
            
        ];
 
  let childrenArray = [
    {
            name: "Mohit Gupta",
            age:"21",
            reporter:"Ananya Mahato",
            parent:"Sadhvika",
      
          },
          {
            name: "Manish",
            age:"7",
            reporter:"Harish Pandey",
            parent:"Abhishek Kumar",
      
          },
  ];
 
  let [orgs, setOrgs] = useState(organisations);
  let [children, setChildren] = useState(childrenArray);
 
  function approved(id) {
    console.log(id);
    let arr = orgs.slice(0, id).concat(orgs.slice(id + 1, orgs.length));
    children.push(orgs[id])
    setOrgs(arr);
  }
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
        {children.map((org, idx) => (
          <tbody>
            <tr key={idx}>
                <td>{idx}</td>
              <td style={{textAlign:"center"}}>{org.name}</td>
              <td style={{textAlign:"center"}}>{org.age}</td>
              <td style={{textAlign:"center"}}>{org.reporter}</td>
              <td style={{textAlign:"center"}}>{org.parent}</td>
              <td style={{textAlign:"center"}}><Button variant="success" onClick={() => approved(idx)}>Approve</Button> <Button variant="danger">Decline</Button></td>
              
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
        {orgs.map((org, idx) => (
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