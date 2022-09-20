import './App.css';
import { Button, Navbar, Nav, Container, Row, Col, Card, } from "react-bootstrap";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import DesktopCard from './components/DesktopCard.js'
import ProductDetail from "./components/ProductDetail.js";
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
            <Nav.Link onClick={() => { navigate("/menu") }}>메뉴</Nav.Link>
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
              <div className="banner"></div>
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



      </Routes>
    </div>
  );
}

export default App;
