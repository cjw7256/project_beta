import { Card, ListGroup, Button, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect} from 'react';

function ProductDetail({ desktops }) {
  let { id } = useParams();
  let desktopInfo = desktops.find((data, i) => {
    return data.id == id;
  });
  return (
    <div>
      <Card style={{ width: "50%", margin: "0 auto" }}>
        <Card.Img variant="top" src={desktopInfo.imgPath} />
        <Card.Body>
          <Card.Title>{desktopInfo.itemName}</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{desktopInfo.content}</ListGroup.Item>
          <ListGroup.Item>{desktopInfo.price}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant="primary">담기</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductDetail;
