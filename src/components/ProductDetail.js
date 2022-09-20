import { Card, ListGroup, Button, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect} from 'react';

function ProductDetail({ desktops }) {
  let { id } = useParams();
  console.log("URL에서 입력받은 id 파라미터");
  console.log(id); //fd001 fd002  fd003

  console.log(desktops);

  // let foodInfo = foods.filter( (data, i) => {
  //   return data.id == id;
  // });

  let desktopInfo = desktops.find((data, i) => {
    return data.id == id;
  });

  console.log(desktopInfo);

  let [showAlert, setShowAlert] = useState(true);

  useEffect( ()=> {
    //3초 후에 안보이게...
    const time = setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    return () => {
      clearTimeout(time);
    }
  }, [] )

  return (
    <div>
      {
        showAlert == true ? 
        <Alert variant="success">
          <Alert.Heading>환영합니다</Alert.Heading>
          <p>
            지금 바로 생각났을때 구매하세요
          </p>
          <hr />
          <p className="mb-0">
            이 안내 메시지는 3초후에 폭발합니다.
          </p>
        </Alert> 
        : null
      }

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
