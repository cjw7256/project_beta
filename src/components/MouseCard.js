import { Col, Card } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
function MouseCard( {mouses, mouse, i } ){ 
    let navigate = useNavigate();
    return (
        <Col>
            <Card style={{ width: "18rem", cursor:"pointer" }} 
            onClick={ () => {navigate("/MouseDetail/" + mouse.id)} }>
              <Card.Img variant="top" src={mouses[i].imgPath} />
              <Card.Body>
                <Card.Title >{mouses[i].itemName}</Card.Title>
                <Card.Text>
                  {mouses[i].content}
                </Card.Text>
                <Card.Text>
                  {mouses[i].price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
    )
}
export default MouseCard;