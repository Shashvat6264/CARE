import React from "react";
import { Card, CardGroup, CardDeck, Button } from "react-bootstrap";

function Org() {
  let organisations = [
    "Organisation 1",
    "Organisation 2",
    "Organisation 3",
    "Organisation 4",
    "Organisation 5",
    "Organisation 6",
    "Organisation 7",
    "Organisation 8",
    "Organisation 9",
  ];
  return (
    <div
      style={{ textAlign: "center", marginLeft: "25px", marginRight: "25px" }}
    >
      {organisations.map((variant, idx) => (
        <Card
          bg="dark"
          key={idx}
          text="white"
          style={{ width: "18rem", display: "inline-block", margin: "20px" }}
          className="mb-2"
        >
          <Card.Header bg="warning">{variant}</Card.Header>
          <Card.Body>
            <Card.Title>{variant}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="secondary">Visit Website</Button>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
}

export default Org;
