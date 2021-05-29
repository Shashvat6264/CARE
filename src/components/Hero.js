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
      <div className="content">
        <div className="desc-bottom">
          Are you an Organisation?
          <br></br>
          If yes then then enter here.
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
