import { Col, Card } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
function LaptopCard( {Laptops, laptop, i } ){ 
    let navigate = useNavigate();
    return (
        <Col>
            <Card style={{ width: "20rem",height:'35rem',margin:'1rem', cursor:"pointer" }} 
            onClick={ () => {navigate("/LaptopDetail/" + laptop.id)} }>
              <Card.Img variant="top" src={Laptops[i].imgPath} />
              <Card.Body>
                <Card.Title >{Laptops[i].itemName}</Card.Title>
                <Card.Text>
                  {Laptops[i].content}
                </Card.Text>
                <Card.Text>
                  {Laptops[i].price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
    )
}
export default LaptopCard;