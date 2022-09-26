import './App.css';
import {
  Button, Navbar, Nav,
  Container, Row, Col, Card,
  DropdownButton, SplitButton,
  ButtonGroup, Dropdown
} from "react-bootstrap";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import DesktopCard from './components/DesktopCard.js'
import ProductDetail from "./components/ProductDetail.js";
import LaptopDetail from "./components/LaptopDetail.js";
import DesktopList from "./DesktopList.js";
import LaptopList from "./LaptopList.js";
import UserLogin from "./components/UserLogin.js";
import UserJoin from "./components/UserJoin.js";

import React, { useRef, } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


function App() {
  let navigate = useNavigate();
  let [showLogin, setShowLogin] = useState(true)

  let [desktops, setDesktop] = useState([

    {
      id: 'ds001',
      itemName: '평범해보이지만 비싼거',
      content: '최신형 데스크탑',
      price: '1,000,000원',
      price2: 1000000,
      imgPath: "http://192.168.0.63:8898/images/computer1.jpg"
    },
    {
      id: 'ds002',
      itemName: '화려해보이지만',
      content: '그저그런 데스크탑',
      price: '800,000원',
      price2: 800000,
      imgPath: "http://192.168.0.63:8898/images/computer2.jpg"
    },
    {
      id: 'ds003',
      itemName: '디아블로사양에 맞춘',
      content: '구형 데스크탑',
      price: '600,000원',
      price2: 600000,
      imgPath: "http://192.168.0.63:8898/images/computer3.jpg"
    },
    {
      id: "ds004",
      itemName: "굉장히비싼",
      content: "고성능 데스크탑",
      price: '1,500,000원',
      price2: 1500000,
      // imgPath: "http://192.168.0.55:8898/images/food4.jpg",
      imgPath: "http://127.0.0.1:8898/images/computer4.jpg",
    },
    {
      id: "ds005",
      itemName: "피시방에서 자주본",
      content: "배틀그라운드 전용 데스크탑",
      price: "800,000원",
      price2: 800000,
      // imgPath: "http://192.168.0.55:8898/images/food5.jpg",
      imgPath: "http://127.0.0.1:8898/images/computer5.jpg",
    },
    {
      id: "ds006",
      itemName: "그래픽카드만 좋은",
      content: "이상한 데스크탑",
      price: "700,000원",
      price2: 700000,
      // imgPath: "http://192.168.0.55:8898/images/food6.jpg",
      imgPath: "http://127.0.0.1:8898/images/computer6.jpg",
    },
    {
      id: "ds007",
      itemName: "아파트처럼 생긴",
      content: "별거없는 데스크탑",
      price: "600,000원",
      price2: 600000,
      // imgPath: "http://192.168.0.55:8898/images/food7.jpg",
      imgPath: "http://127.0.0.1:8898/images/computer7.jpg",
    },
    {
      id: "ds008",
      itemName: "흰색이라 때가잘타는",
      content: "비싼 데스크탑",
      price: "1,200,000원",
      price2: 1200000,
      // imgPath: "http://192.168.0.55:8898/images/food8.jpg",
      imgPath: "http://127.0.0.1:8898/images/computer8.jpg",
    },
    {
      id: "ds009",
      itemName: "블링블링",
      content: "이쁜 분홍색 데스크탑",
      price: "1,300,000원",
      price2: 1300000,
      // imgPath: "http://192.168.0.55:8898/images/food9.jpg",
      imgPath: "http://127.0.0.1:8898/images/computer9.jpg",
    },
  ])
  let [Laptops, setLaptops] = useState([

    {
      id: 'ls001',
      itemName: 'LG울트라PC엣지 16U70Q-GA56K',
      content: 'CPU:AMD Ryzen5 5625U프로세서\nRAM:16GB\nSSD:256GB\n그래픽카드:AMD Radeon 내장형',
      price: '1,259,000원',
      price2: 1259000,
      imgPath: "http://192.168.0.63:8898/images/Laptop1.jpg"
    },
    {
      id: 'ls002',
      itemName: 'LG 그램360 16TD90Q-GX56K',
      content: 'CPU:i5-1240P\nRAM:16GB\nSSD:256GB+확장 슬롯1\n그래픽카드:인텔 내장형',
      price: '1,749,000원',
      price2: 1749000,
      imgPath: "http://192.168.0.63:8898/images/Laptop2.jpg"
    },
    {
      id: 'ls003',
      itemName: 'DELL G15 DG5520-WH04KR',
      content: 'CPU:i7-12700H\nRAM:16GB\nSSD:512GB\n그래픽카드:RTX3070Ti 8GB GDDR6',
      price: '1,749,000원',
      price2: 1749000,
      imgPath: "http://192.168.0.63:8898/images/Laptop3.jpg"
    },
    {
      id: 'ls004',
      itemName: '맥북프로 13 M1',
      content: 'CPU:기타\nRAM:8GB\nSSD:512GB\n그래픽카드:기타',
      price: '1,741,200원',
      price2: 1741200,
      imgPath: "http://192.168.0.63:8898/images/Laptop4.jpg"
    },
    {
      id: 'ls005',
      itemName: '맥북프로 13 M2',
      content: 'CPU:기타\nRAM:16GB\nSSD:256GB\n그래픽카드:기타',
      price: '1,858,200원',
      price2: 1858200,
      imgPath: "http://192.168.0.63:8898/images/Laptop5.jpg"
    },
    {
      id: 'ls006',
      itemName: 'ASUS OLED 터치 R7',
      content: 'CPU:AMD Ryzen 7\nRAM:16GB MHz\nSSD:512GB\n그래픽카드:RTX3050Ti',
      price: '1,749,000원',
      price2: 1749000,
      imgPath: "http://192.168.0.63:8898/images/Laptop6.jpg"
    },
    {
      id: 'ls007',
      itemName: 'ASUS 젠북14 UX5400ZB-L7027W',
      content: 'CPU:INTEL Core i5\nRAM:16GB\nSSD:512GB\n그래픽카드:기타',
      price: '1,749,000원',
      price2: 1749000,
      imgPath: "http://192.168.0.63:8898/images/Laptop7.jpg"
    },
    {
      id: 'ls008',
      itemName: 'LG 울트라PC 엣지 16UD70Q-GX56K',
      content: 'CPU:AMD RYZEN 5000 SERIES\nRAM:16GB\nSSD:256GB+확장 슬롯1\n그래픽카드:기타',
      price: '1,749,000원',
      price2: 1749000,
      imgPath: "http://192.168.0.63:8898/images/Laptop8.jpg"
    },
    {
      id: 'ls009',
      itemName: 'Victus 16-e0108AX_ND4',
      content: 'CPU:AMD R5-5600H\nRAM:32GB \nSSD:512GB\n그래픽카드:RTX3050Ti',
      price: '1,199,000원',
      price2: 1199000,
      imgPath: "http://192.168.0.63:8898/images/Laptop9.jpg"
    },
  ])


  return (
    <div className="App">
      <Navbar bg="light" variant="light" className='hold'>
        <Container>
          <Navbar.Brand href="/">COMSCLUB</Navbar.Brand>
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
                  <Dropdown.Item eventKey="2" onClick={() => { navigate("/laptoplist") }}>노트북</Dropdown.Item>
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
              <div className='slide'>
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide><img src="http://127.0.0.1:8898/images/banner_bg.jpg" onClick={() => { navigate("/desktoplist") }}/></SwiperSlide>
                  <SwiperSlide><img src="http://127.0.0.1:8898/images/laptop1.jpg" onClick={() => { navigate("/laptoplist") }}/></SwiperSlide>
                  <SwiperSlide><img src="http://127.0.0.1:8898/images/mouse1.jpg" /></SwiperSlide>
                  <SwiperSlide><img src="http://127.0.0.1:8898/images/keyboard1.jpg" /></SwiperSlide>
                  <SwiperSlide><img src="http://127.0.0.1:8898/images/Headse1.jpg" /></SwiperSlide>
                  
                </Swiper>
              </div>
              <div>
                <Button onClick={() => {
                  let temp = [...desktops]
                  temp = temp.sort((a, b) => {
                    return a.price2 - b.price2
                  })
                  setDesktop(temp)
                }}>가격이 낮은순으로 정렬</Button>
                <br />
                <br />
                <Button onClick={() => {
                  let temp = [...desktops]
                  temp = temp.sort((a, b) => {
                    return b.price2 - a.price2
                  })
                  setDesktop(temp)
                }}>가격이 높은순으로 정렬</Button>
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
        <Route path="/LaptopDetail/:id" element={<LaptopDetail Laptops={Laptops} />} />
        <Route path="/desktoplist/*" element={<DesktopList />} />
        <Route path="/laptoplist/*" element={<LaptopList />} />
        <Route path="/login" element={<UserLogin showLogin={showLogin} setShowLogin={setShowLogin} />} />
        <Route path="/join" element={<UserJoin />} />

        <Route path="*" element={<div>잘못된 경로 입니다. 뒤로가기를 해주세요.333</div>} />


      </Routes>
    </div>
  );
}

export default App;
