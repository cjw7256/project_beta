import './App.css';
import { Button, Navbar, Nav, 
  Container, Row, Col, Card,
  DropdownButton, SplitButton,
  ButtonGroup, Dropdown
} from "react-bootstrap";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import DesktopCard from './components/DesktopCard.js'
import ProductDetail from "./components/ProductDetail.js";
import axios from "axios";

function App() {
  let navigate = useNavigate();
  let [desktops, setDesktop] = useState([

    {
      id: 'ds001',
      itemName: 'com001',
      content: '최신형 데스크탑',
      price: '1,000,000원',
      imgPath: "http://192.168.0.63:8898/images/computer1.jpg"
    },
    {
      id: 'ds002',
      itemName: 'com002',
      content: '그저그런 데스크탑',
      price: '800,000원',
      imgPath: "http://192.168.0.63:8898/images/computer2.jpg"
    },
    {
      id: 'ds003',
      itemName: 'com003',
      content: '구형 데스크탑',
      price: '600,000원',
      imgPath: "http://192.168.0.63:8898/images/computer3.jpg"
    },

  ])






  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Market</Navbar.Brand>
          <Nav className="me-auto">
          <div className="mb-2">
                  {[DropdownButton].map((DropdownType, idx) => (
                    <DropdownType
                      as={ButtonGroup}
                      key={idx}
                      id={`dropdown-button-drop-${idx}`}
                      size="lg"
                      title="카테고리"
                    >
                      <Dropdown.Item eventKey="1">데스크톱</Dropdown.Item>
                      <Dropdown.Item eventKey="2">노트북</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="3">마우스</Dropdown.Item>
                      <Dropdown.Item eventKey="4">키보드</Dropdown.Item>
                      <Dropdown.Item eventKey="5">헤드셋</Dropdown.Item>
                    </DropdownType>
                  ))}
                </div>
          </Nav>
          <Nav className="user-login">
            <Nav.Link onClick={() => { navigate("/login") }}>로그인</Nav.Link>
            <Nav.Link onClick={() => { navigate("/join") }}>회원가입</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="banner">

                

              </div>
              <Container>
                <Row sm={1} md={3}>
                  {desktops.map((data, i) => {
                    //desktops 배열 안에 data와 i(인덱스)
                    return (
                      <DesktopCard key={data.id} desktops={desktops} desktop={data} i={i} />
                    );
                  })}
                </Row>
              </Container>
            </div>
          }
        />


        <Route path="/ProductDetail/:id" element={<ProductDetail desktops={desktops} />} />
        <Route path="*" element={<div>잘못된 경로 입니다. 뒤로가기를 해주세요.</div>} />


      </Routes>
    </div>
  );
}

export default App;
