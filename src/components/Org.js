import React from "react";
import { Card, CardGroup, CardDeck, Button } from "react-bootstrap";

function Org() {
  let organisations = [
    { name: "Organisation 1", description: "Some quick example text to build on the card title and make up the bulk of the card's content." },
    { name: "Organisation 2", description: "Some quick example text to build on the card title and make up the bulk of the card's content." },
    { name: "Organisation 3", description: "Some quick example text to build on the card title and make up the bulk of the card's content." },
    { name: "Organisation 4", description: "Some quick example text to build on the card title and make up the bulk of the card's content." },
    { name: "Organisation 5", description: "Some quick example text to build on the card title and make up the bulk of the card's content." },
    { name: "Organisation 6", description: "Some quick example text to build on the card title and make up the bulk of the card's content." },
    { name: "Organisation 7", description: "Some quick example text to build on the card title and make up the bulk of the card's content." },
    { name: "Organisation 8", description: "Some quick example text to build on the card title and make up the bulk of the card's content." },
    { name: "Organisation 9", description: "Some quick example text to build on the card title and make up the bulk of the card's content." }
  ];
  return (
    <div
      style={{ textAlign: "center", marginLeft: "25px", marginRight: "25px" }}
    >
      {organisations.map((org, idx) => (
        <Card
          bg="dark"
          key={idx}
          text="white"
          style={{ width: "18rem", display: "inline-block", margin: "20px" }}
          className="mb-2"
        >
          <Card.Header bg="warning">{org.name}</Card.Header>
          <Card.Body>
            <Card.Title>{org.name}</Card.Title>
            <Card.Text>
              {org.description}
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
