import React from "react";
import Land from "./Land";
import LandBottom from "./LandBottom";
import Button from "react-bootstrap/Button";
import "./styles.css";
function Hero() {
  return (
    <div>
     
      <div className="content">
        <Land />

        <div className="desc">
        <h1 style={{textAlign:"center" ,marginTop:"5%" ,fontFamily:"Karla",fontSize:"40px",fontWeight:"500",marginBottom:"5%"}}>CARE:Child Adoption and Registration on Etherium</h1>
          Do you want to help a child get adopted and not fall trap to trafficking?
          <br></br>
          Get a child registered.
          <br></br>
          <Button variant="warning" href="/child-reg">
            Register a Child
          </Button>
        </div>
        <br></br>
      </div>
      <div className="content bottom">
        <div className="desc-bottom ">
          Are you an Organisation for Child Adoption?

          <br></br>
          DO you wish to light up the future of the Child
          <br></br>
          If yes then then enter here.
          <br></br>
          <br></br>
          <Button variant="warning" href="/org-dash">
            Organisation Dashboard
          </Button>
        </div>
        <br></br>
        <LandBottom />
      </div>
    </div>
  );
}

export default Hero;
