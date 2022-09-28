import { Col, Card } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
function DesktopCard( {desktops, desktop, i } ){ 
    let navigate = useNavigate();
    return (
        <Col>
            <Card style={{ width: "20rem",height:'35rem',margin:'1rem', cursor:"pointer" }} 
            onClick={ () => {navigate("/ProductDetail/" + desktop.id)} }>
              <Card.Img variant="top" src={desktops[i].imgPath} />
              <Card.Body>
                <Card.Title >{desktop.itemName}</Card.Title>
                <Card.Text>
                  {desktops[i].content}
                </Card.Text>
                <Card.Text>
                  {desktop.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
    )
}
export default DesktopCard;