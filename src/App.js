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
import DesktopList from "./DesktopList.js";
import UserLogin from "./UserLogin.js";
import UserJoin from "./UserJoin.js";




function App() {
  let navigate = useNavigate();
  let [desktops, setDesktop] = useState([

    {
      id: 'ds001',
      itemName: '평범해보이지만 비싼거',
      content: '최신형 데스크탑',
      price: '1,000,000원',
      imgPath: "http://192.168.0.63:8898/images/computer1.jpg"
    },
    {
      id: 'ds002',
      itemName: '화려해보이지만',
      content: '그저그런 데스크탑',
      price: '800,000원',
      imgPath: "http://192.168.0.63:8898/images/computer2.jpg"
    },
    {
      id: 'ds003',
      itemName: '디아블로사양에 맞춘',
      content: '구형 데스크탑',
      price: '600,000원',
      imgPath: "http://192.168.0.63:8898/images/computer3.jpg"
    },
    {
      id: "ds004",
      itemName: "굉장히비싼",
      content: "고성능 데스크탑",
      price: '1,500,000원',
      // imgPath: "http://192.168.0.55:8898/images/food4.jpg",
      imgPath: "http://127.0.0.1:8898/images/computer4.jpg",
    },
    {
      id: "ds005",
      itemName: "피시방에서 자주본",
      content: "배틀그라운드 전용 데스크탑",
      price: "800,000원",
      // imgPath: "http://192.168.0.55:8898/images/food5.jpg",
      imgPath: "http://127.0.0.1:8898/images/computer5.jpg",
    },
    {
      id: "ds006",
      itemName: "그래픽카드만 좋은",
      content: "이상한 데스크탑",
      price: "700,000원",
      // imgPath: "http://192.168.0.55:8898/images/food6.jpg",
      imgPath: "http://127.0.0.1:8898/images/computer6.jpg",
    },
    {
      id: "ds007",
      itemName: "아파트처럼 생긴",
      content: "별거없는 데스크탑",
      price: "600,000원",
      // imgPath: "http://192.168.0.55:8898/images/food7.jpg",
      imgPath: "http://127.0.0.1:8898/images/computer7.jpg",
    },
    {
      id: "ds008",
      itemName: "흰색이라 때가잘타는",
      content: "비싼 데스크탑",
      price: "1,200,000원",
      // imgPath: "http://192.168.0.55:8898/images/food8.jpg",
      imgPath: "http://127.0.0.1:8898/images/computer8.jpg",
    },
    {
      id: "ds009",
      itemName: "블링블링",
      content: "이쁜 분홍색 데스크탑",
      price: "1,300,000원",
      // imgPath: "http://192.168.0.55:8898/images/food9.jpg",
      imgPath: "http://127.0.0.1:8898/images/computer9.jpg",
    },
  ])


  
  return (
    <div className="App">
      <Navbar bg="light" variant="light" className='hold'>
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
                      <Dropdown.Item eventKey="1" onClick={() => { navigate("/desktoplist") }}>데스크톱</Dropdown.Item>
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
        <Route path="/desktoplist" element={<DesktopList/>} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/join" element={<UserJoin/>} />
        
        <Route path="*" element={<div>잘못된 경로 입니다. 뒤로가기를 해주세요.</div>} />


      </Routes>
    </div>
  );
}

export default App;
