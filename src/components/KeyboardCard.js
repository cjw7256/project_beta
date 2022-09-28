import { Col, Card } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
function KeyboardCard( {keyboards, keyboard, i } ){ 
    let navigate = useNavigate();
    return (
        <Col>
            <Card style={{ width: "20rem",height:'35rem',margin:'1rem', cursor:"pointer" }} 
            onClick={ () => {navigate("/KeyboardDetail/" + keyboard.id)} }>
              <Card.Img variant="top" src={keyboards[i].imgPath} />
              <Card.Body>
                <Card.Title >{keyboards[i].itemName}</Card.Title>
                <Card.Text>
                  {keyboards[i].content}
                </Card.Text>
                <Card.Text>
                  {keyboards[i].price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
    )
}
export default KeyboardCard;