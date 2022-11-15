import React from "react";
import { Button, Card } from "react-bootstrap";

const ProfileCard = (props) => {
    const handleName = (name) => alert(`Your Name Is ${props.name}`)
  return (
    <div>
      <Card className="bg-dark" style={{ width: "18rem" , color:"white"  }}>
            {props.children}
        <Card.Body>
          <Card.Title >{props.name}</Card.Title>
          <Card.Text>{props.profe}</Card.Text>
          <Card.Text>{props.bio}</Card.Text>
          <Button variant="danger" onClick={handleName}>Say My Name!!</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProfileCard;
