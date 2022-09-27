import { Card, ListGroup, Button, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import WritingItem from "./WritingItem.js";
import "./Writing.css";

function HeadsetDetail({ headsets }) {
  let { id } = useParams();
  
  let headsetsInfo = headsets.find((data, i) => {
    return data.id == id;
  });

  const buttonStyle = {
    color: "white",
    border: "none",
    padding: "5px",
    cursor: "pointer",
    float: "right",
    backgroundColor: "#F1A661",
    marginLeft: "3px"
  };
  let [writingData, setWritingData] = useState([

  ]);

  let [inputValue, setInputValue] = useState("");



  return (
    <div>
      <Card style={{ width: "50%", margin: "0 auto" }}>
        <Card.Img variant="top" src={headsetsInfo.imgPath} />
        <Card.Body>
          <Card.Title>{headsetsInfo.itemName}</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{headsetsInfo.content}</ListGroup.Item>
          <ListGroup.Item>{headsetsInfo.price}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant="primary">담기</Button>
        </Card.Body>
      </Card>


      <div className="container">
        <div className="todoHeader">
          <div>
            <h1>상품평을 작성해주세요</h1>
          </div>
        </div>

        <div className="todoSection">
          <form>
            <input value={inputValue} type="text" name="value" placeholder="상품평 입력"
              onChange={(event) => {
                setInputValue(event.target.value); //input 안에 입력된 text에 접근 가능
              }} />

            <button onClick={(event) => {
              event.preventDefault(); //form 양식에서 버튼이눌리면 (submit) -> submit일어나면 페이지갱신
              //여기서 먼저 값이 있는지 체크
              //안되는 경우면 수행이 안되도록 미리필터
              if (inputValue.trim() === "") { //텍스트가 없으면
                return; // 아무것도 저장안하고 종료
              }
              let addItem = {
                writingId: writingData.length + 1,
                writingItemName: inputValue.trim(),
                finished: false,
              }
              let temp = [...writingData];
              temp.push(addItem);
              setWritingData(temp);
              setInputValue('');
            }}>저장</button>
          </form>

          <br />

          {
            writingData.map((data, i) => {
              return (
                <WritingItem key={data.writingId} dataId={data.writingId} writingData={writingData}
                  data={data} setWritingData={setWritingData} buttonStyle={buttonStyle}></WritingItem>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default HeadsetDetail;
