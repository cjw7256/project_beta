import { Col, Card } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
function HeadsetCard( {headsets, headset, i } ){ 
    let navigate = useNavigate();
    return (
        <Col>
            <Card style={{ width: "20rem",height:'35rem',margin:'1rem', cursor:"pointer" }}  
            onClick={ () => {navigate("/HeadsetDetail/" + headset.id)} }>
              <Card.Img variant="top" src={headsets[i].imgPath} />
              <Card.Body>
                <Card.Title >{headsets[i].itemName}</Card.Title>
                <Card.Text>
                  {headsets[i].content}
                </Card.Text>
                <Card.Text>
                  {headsets[i].price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
    )
}
export default HeadsetCard;