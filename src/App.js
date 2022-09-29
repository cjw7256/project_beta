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
import DesktopList from "./DesktopList.js";
import LaptopDetail from "./components/LaptopDetail.js";
import LaptopList from "./LaptopList.js";
import MouseDetail from "./components/MouseDetail.js";
import MouseList from "./MouseList.js";
import KeyboardDetail from "./components/KeyboardDetail.js";
import KeyboardList from "./KeyboardList.js";
import HeadsetDetail from "./components/HeadsetDetail.js";
import HeadsetList from "./HeadsetList.js";
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

import computer1 from './images/computer1.jpg'
import computer2 from './images/computer2.jpg'
import computer3 from './images/computer3.jpg'
import computer4 from './images/computer4.jpg'
import computer5 from './images/computer5.jpg'
import computer6 from './images/computer6.jpg'
import computer7 from './images/computer7.jpg'
import computer8 from './images/computer8.jpg'
import computer9 from './images/computer9.jpg'

import laptop1 from './images/laptop1.jpg'
import laptop2 from './images/laptop2.jpg'
import laptop3 from './images/laptop3.jpg'
import laptop4 from './images/laptop4.jpg'
import laptop5 from './images/laptop5.jpg'
import laptop6 from './images/laptop6.jpg'
import laptop7 from './images/laptop7.jpg'
import laptop8 from './images/laptop8.jpg'
import laptop9 from './images/laptop9.jpg'

import mouse1 from './images/mouse1.jpg'
import mouse2 from './images/mouse2.jpg'
import mouse3 from './images/mouse3.jpg'
import mouse4 from './images/mouse4.jpg'
import mouse5 from './images/mouse5.jpg'
import mouse6 from './images/mouse6.jpg'
import mouse7 from './images/mouse7.jpg'
import mouse8 from './images/mouse8.jpg'
import mouse9 from './images/mouse9.jpg'

import keyboard1 from './images/keyboard1.jpg'
import keyboard2 from './images/keyboard2.jpg'
import keyboard3 from './images/keyboard3.jpg'
import keyboard4 from './images/keyboard4.jpg'
import keyboard5 from './images/keyboard5.jpg'
import keyboard6 from './images/keyboard6.jpg'
import keyboard7 from './images/keyboard7.jpg'
import keyboard8 from './images/keyboard8.jpg'
import keyboard9 from './images/keyboard9.jpg'

import headset1 from './images/headset1.jpg'
import headset2 from './images/headset2.jpg'
import headset3 from './images/headset3.jpg'
import headset4 from './images/headset4.jpg'
import headset5 from './images/headset5.jpg'
import headset6 from './images/headset6.jpg'
import headset7 from './images/headset7.jpg'
import headset8 from './images/headset8.jpg'
import headset9 from './images/headset9.jpg'


function App() {
  let navigate = useNavigate();
  let [showLogin, setShowLogin] = useState(true)

  let [desktops, setDesktop] = useState([

    {
      id: 'ds001',
      itemName: 'DELL 3080 SFF WiFi i5-10505 8G 256G 윈10 Pro',
      content: 'CPU:인텔 코어 i5-10505\n저장장치:SSD 256GB\n메모리:8GB DDR4\n그래픽:intel UHD Graphics',
      price: '799,000원',
      price2: 799000,
      imgPath: computer1
    },
    {
      id: 'ds002',
      itemName: '컴집/게이밍/조립PC',
      content: 'CPU:AMD 라이젠 5-4세대 5600X 3.7G\n저장장치:SSD 512GB\n메모리:16GB DDR4\n그래픽:지포스 RTX3060 D6 12G',
      price: '1,029,000원',
      price2: 1029000,
      imgPath: computer2
    },
    {
      id: 'ds003',
      itemName: '컴집/게이밍/조립PC',
      content: 'CPU:인텔12세대-i5 12400F 2.5G\n저장장치:SSD 512GB\n메모리:16GB DDR4\n그래픽:지포스 RTX3060 D6 12G',
      price: '1,069,000원',
      price2: 1069000,
      imgPath: computer3
    },
    {
      id: 'ds004',
      itemName: 'NEW.신상 특별한이벤트.삼성정품.DM500SD/사은품증정~최다판매.고성능NVMe',
      content: 'CPU:인텔 12세대 Pentium 듀얼코어 G7400\n저장장치:SSD 256GB\n메모리:4GB DDR4\n그래픽:intel UHD Graphics 710',
      price: '648,000원',
      price2: 648000,
      imgPath: computer4
    },
    {
      id: 'ds005',
      itemName: 'LG일체형PC 27V70N-GR3SK 27인치 10세대i3 8GB 256GB win11 올인원 PC 데스크탑 컴퓨터',
      content: 'CPU:10세대 인텔 코어 i3-10110U\n저장장치:SSD 256GB\n메모리:8GB DDR4\n그래픽:intel UHD Graphics',
      price: '929,000원',
      price2: 929000,
      imgPath: computer5
    },
    {
      id: 'ds006',
      itemName: 'DELL 3080 SFF WiFi i5-10505 8G 256G 윈10 Pro',
      content: 'CPU:인텔 코어 i3-1115G4 Processor\n저장장치:SSD 256GB\n메모리:8GB DDR4\n그래픽:intel UHD Graphics',
      price: '858,000원',
      price2: 858000,
      imgPath: computer6
    },
    {
      id: 'ds007',
      itemName: '굿워크 D214N 인텔 10th i5-10400 데스크탑 그레이',
      content: 'CPU:10세대 인텔 코어 i5-10400\n저장장치:SSD 240GB\n메모리:8GB DDR4\n그래픽:intel UHD 630',
      price: '630,520원',
      price2: 630520,
      imgPath: computer7
    },
    {
      id: 'ds008',
      itemName: '리오나인터보 CG256XR66 라이젠5600X RX6600 게이밍PC',
      content: 'CPU:AMD Ryzen5 5600X 버미어\n저장장치:SSD 512GB\n메모리:16GB DDR4\n그래픽:AMD 라데온 RX 6600',
      price: '1,156,840원',
      price2: 1156840,
      imgPath: computer8
    },
    {
      id: 'ds009',
      itemName: '라이젠 R5 5600X_GTX1660SUPER 게이밍컴퓨터 조립PC',
      content: 'CPU:라이젠 R5 5600X\n저장장치:SSD 512GB\n메모리:16GB DDR4\n그래픽:지포스 GTX 1660 SUPER 6GB',
      price: '889,000원',
      price2: 889000,
      imgPath: computer9
    },

  ])
  let [Laptops, setLaptops] = useState([

    {
      id: 'ls001',
      itemName: 'LG울트라PC엣지 16U70Q-GA56K',
      content: 'CPU:AMD Ryzen5 5625U프로세서\nRAM:16GB\nSSD:256GB\n그래픽카드:AMD Radeon 내장형',
      price: '1,259,000원',
      price2: 1259000,
      imgPath: laptop1
    },
    {
      id: 'ls002',
      itemName: 'LG 그램360 16TD90Q-GX56K',
      content: 'CPU:i5-1240P\nRAM:16GB\nSSD:256GB+확장 슬롯1\n그래픽카드:인텔 내장형',
      price: '1,749,000원',
      price2: 1749000,
      imgPath: laptop2
    },
    {
      id: 'ls003',
      itemName: 'DELL G15 DG5520-WH04KR',
      content: 'CPU:i7-12700H\nRAM:16GB\nSSD:512GB\n그래픽카드:RTX3070Ti 8GB GDDR6',
      price: '1,749,000원',
      price2: 1749000,
      imgPath: laptop3
    },
    {
      id: 'ls004',
      itemName: '맥북프로 13 M1',
      content: 'CPU:기타\nRAM:8GB\nSSD:512GB\n그래픽카드:기타',
      price: '1,741,200원',
      price2: 1741200,
      imgPath: laptop4
    },
    {
      id: 'ls005',
      itemName: '맥북프로 13 M2',
      content: 'CPU:기타\nRAM:16GB\nSSD:256GB\n그래픽카드:기타',
      price: '1,858,200원',
      price2: 1858200,
      imgPath: laptop5
    },
    {
      id: 'ls006',
      itemName: 'ASUS OLED 터치 R7',
      content: 'CPU:AMD Ryzen 7\nRAM:16GB MHz\nSSD:512GB\n그래픽카드:RTX3050Ti',
      price: '1,749,000원',
      price2: 1749000,
      imgPath: laptop6
    },
    {
      id: 'ls007',
      itemName: 'ASUS 젠북14 UX5400ZB-L7027W',
      content: 'CPU:INTEL Core i5\nRAM:16GB\nSSD:512GB\n그래픽카드:기타',
      price: '1,749,000원',
      price2: 1749000,
      imgPath: laptop7
    },
    {
      id: 'ls008',
      itemName: 'LG 울트라PC 엣지 16UD70Q-GX56K',
      content: 'CPU:AMD RYZEN 5000 SERIES\nRAM:16GB\nSSD:256GB+확장 슬롯1\n그래픽카드:기타',
      price: '1,749,000원',
      price2: 1749000,
      imgPath: laptop8
    },
    {
      id: 'ls009',
      itemName: 'Victus 16-e0108AX_ND4',
      content: 'CPU:AMD R5-5600H\nRAM:32GB \nSSD:512GB\n그래픽카드:RTX3050Ti',
      price: '1,199,000원',
      price2: 1199000,
      imgPath: laptop9
    },
  ])
  let [mouses, setMouses] = useState([

    {
      id: 'ms001',
      itemName: '로지텍G402 Hyperion Fury 게이밍마우스',
      content: '해상도:240-4000dpi\nUSB 보고율:1000Hz\n버튼 내구성:2000만 클릭\n무게:144g',
      price: '49,900원',
      price2: 49900,
      imgPath: mouse1
    },
    {
      id: 'ms002',
      itemName: '로지텍 G304 무선 게이밍 마우스',
      content: '해상도:200-12000dpi\nUSB 보고율:1000Hz\n버튼 내구성:1000만 클릭\n무게:99g',
      price: '44,690원',
      price2: 44690,
      imgPath: mouse2
    },
    {
      id: 'ms003',
      itemName: 'AG0102 게이밍 유선 마우스',
      content: '해상도:1800-12800dpi\n스캔율:7000fps\n버튼수:9개\n무게:116g',
      price: '39,900원',
      price2: 39900,
      imgPath: mouse3
    },
    {
      id: 'ms004',
      itemName: '로지텍G402 Hyperion Fury 게이밍마우스',
      content: '해상도:200-4000dpi\nUSB 보고율:1000Hz\n버튼 수:8개\n무게:144g',
      price: '49,900원',
      price2: 49900,
      imgPath: mouse4
    },
    {
      id: 'ms005',
      itemName: 'Microsoft 스컬프트 에고노믹 마우스',
      content: '송수신 장치 버전:Microsoft 2.4GHz\n무선 범위:3m\n무선 플랫폼:독점 2.4GHz\n배터리 수명:최대 12개월',
      price: '49,000원',
      price2: 49000,
      imgPath: mouse5
    },
    {
      id: 'ms006',
      itemName: '마이크로소프트 에고노믹 블루투스 무선마우스',
      content: '무선주파수:2.4GHz 주파수 범위\n무선 범위:5~10m\n배터리 수명:최대 15개월\n무게:113g',
      price: '49,900원',
      price2: 49900,
      imgPath: mouse6
    },
    {
      id: 'ms007',
      itemName: '로지텍 멀티태스킹 무선마우스(M585)',
      content: '해상도:1000dpi\n배터리 수명:최대 24개월*\n무선 범위:약 10M\n무게:101g',
      price: '49,900원',
      price2: 49900,
      imgPath: mouse7
    },
    {
      id: 'ms008',
      itemName: 'SPA-MMG1PUB 게이밍 마우스',
      content: '해상도:200-10000dpi\n스캔율:5000FPS\n버튼 내구성:2천만번 클릭\n무게:126g',
      price: '29,900원',
      price2: 29900,
      imgPath: mouse8
    },
    {
      id: 'ms009',
      itemName: '로지텍G102 게이밍마우스',
      content: '해상도:200-8000dpi\nUSB 보고율:1000Hz\n\n무게:85g',
      price: '25,410원',
      price2: 25410,
      imgPath: mouse9
    },

  ])
  let [keyboards, setKeyboards] = useState([

    {
      id: 'ks001',
      itemName: 'SPA-NKG2CUB텐키리스 기계식키보드',
      content: '접점 방식:기계식 스위치\n키수:87키\n소비 전류:250mA\n무게:775g',
      price: '65,000원',
      price2: 65000,
      imgPath: keyboard1
    },
    {
      id: 'ks002',
      itemName: 'SPA-KKG1CUB LED 기계식 키보드 청축',
      content: '접점 방식:기계식 스위치\n키수:104키\n소비 전류:300mA\n무게:924g',
      price: '59,800원',
      price2: 59800,
      imgPath: keyboard2
    },
    {
      id: 'ks003',
      itemName: 'MANIC X40 4세대 광축 기계식 키보드',
      content: '키보드 방식:축교환식 광축\n키 개수:104 Key\n폴링레이트:1000Hz\n무게:1243g',
      price: '38,500원',
      price2: 35800,
      imgPath: keyboard3
    },
    {
      id: 'ks004',
      itemName: 'MANIC X48 4세대 광축 기계식 키보드',
      content: '키보드 방식:축교환식 광축\n키 개수:104 Key\n폴링레이트:1000Hz\n무게:1243g',
      price: '41,800원',
      price2: 41800,
      imgPath: keyboard4
    },
    {
      id: 'ks005',
      itemName: 'MANIC X50 4세대 광축 기계식 키보드',
      content: '키보드 방식:JIXIAN 4.0 광축 스위치\n키 개수:104 Key\n폴링레이트:1000Hz\n무게:1080g',
      price: '47,300원',
      price2: 47300,
      imgPath: keyboard5
    },
    {
      id: 'ks006',
      itemName: '워프 WK3 블루투스 게이밍 기계식 키보드',
      content: '스위치:MANIC SWITCH\n키 개수:87 Key\n폴링레이트:1000Hz\n무게:817g',
      price: '81,400원',
      price2: 81400,
      imgPath: keyboard6
    },
    {
      id: 'ks007',
      itemName: '메카 ZK2 마닉축 RGB 게이밍 기계식 키보드',
      content: '스위치:MANIC SWITCH\n키 개수:104 Key\n폴링레이트:1000Hz\n무게:1087g',
      price: '69,300원',
      price2: 69300,
      imgPath: keyboard7
    },
    {
      id: 'ks008',
      itemName: '워프 WK2 마닉축 RGB 게이밍 기계식 키보드 청축',
      content: '스위치:MANIC SWITCH\n키 개수:104 Key\n폴링레이트:1000Hz\n무게:1184g',
      price: '66,000원',
      price2: 66000,
      imgPath: keyboard8
    },
    {
      id: 'ks009',
      itemName: '제닉스 기계식 키보드 스톰엑스제로 브라운',
      content: '키 스위치:(청축, 갈축, 적축) 선택\n레이아웃:한글 104키\n측면 배열:스탭 스컬처 2\n무게:1.2Kg',
      price: '59,900원',
      price2: 59900,
      imgPath: keyboard9
    },

  ])
  let [headsets, setHeadsets] = useState([

    {
      id: 'hs001',
      itemName: 'MANIC HS-600 7.1CH',
      content: 'Sound:Stereo Virtual 7.1CH\nSpeaker Sensitivity:119dB\nMicrophone Sensitivity:-42dB\nWeight:300g',
      price: '52,500원',
      price2: 52500,
      imgPath: headset1
    },
    {
      id: 'hs002',
      itemName: '제닉스 TITAN WH7 무선 게이밍 헤드셋',
      content: '충전 시간:4~5시간\n사용시간:LED 작동시: 약11시간 / 비작동시 약 20시간\n감도:(스피커)88dBV / (마이크)-36dBV\n무게:310g',
      price: '88,900원',
      price2: 88900,
      imgPath: headset2
    },
    {
      id: 'hs003',
      itemName: '제닉스 TITAN WH5 무선 게이밍 헤드셋',
      content: '충전 시간:3시간\n사용시간:LED 작동시: 약8시간 / 비작동시 약 11시간\n감도:(스피커)104dBV / (마이크)-42dBV\n무게:345g',
      price: '79,900원',
      price2: 79900,
      imgPath: headset3
    },
    {
      id: 'hs004',
      itemName: '레이저 크라켄X USB헤드셋',
      content: '사운드:7.1 서라운드 사운드\n주파수 응답: 100Hz-10kHz\n감도:106dB\n무게:275g',
      price: '52,500원',
      price2: 52500,
      imgPath: headset4
    },
    {
      id: 'hs005',
      itemName: 'Barracuda X Plus 바라다쿠다 엑스 플러스 무선헤드셋',
      content: '플랫폼:4-IN-1 멀티 플랫폼 연결\n주파수:20Hz~20kHz\n감도:96dBSPL/mW@1KHz\n무게:270g',
      price: '149,000원',
      price2: 149000,
      imgPath: headset5
    },
    {
      id: 'hs006',
      itemName: '로지텍 USB 스테레오 헤드셋 H570e',
      content: '타이핑:양방향ECM\n주파수:100Hz-18KHz\n감도:(마이크)-47dB/(스피커)94dB\n무게:111g',
      price: '60,500원',
      price2: 60500,
      imgPath: headset6
    },
    {
      id: 'hs007',
      itemName: 'Kraken V3 크라켓 게이밍 헤드셋',
      content: '주파수 응답:20Hz-20kHz\n감도:96dBSPL/mW\n가상 서라운드 인코딩:THX Spatial Audio\n무게:325g',
      price: '149,000원',
      price2: 149000,
      imgPath: headset7
    },
    {
      id: 'hs008',
      itemName: '고급형 F5 블루투스 무선헤드셋',
      content: '블루투스 버전:Bluetooth v4.1\n음압레벨:118dB\n사용시간:충전시간:2시간/사용시간14시간\n무게:250g',
      price: '59,900원',
      price2: 59900,
      imgPath: headset8
    },
    {
      id: 'hs009',
      itemName: '로지텍 G435 LIGHTSPEED 무선 게이밍 헤드셋',
      content: '주파수:20Hz-20KHz\n민감도:83.1dB SPL/mW\n사용시간:18시간\무게:165g',
      price: '99,000원',
      price2: 99000,
      imgPath: headset9
    },


  ])

  return (
    <div className="App">
      <Navbar bg="light" variant="light" className='hold'>
        <Container>
          <Navbar.Brand style={{cursor:"pointer"}}  onClick={() => { navigate("/") }}>COMSCLUB</Navbar.Brand>
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
                  <Dropdown.Item eventKey="3" onClick={() => { navigate("/mouselist") }}>마우스</Dropdown.Item>
                  <Dropdown.Item eventKey="4" onClick={() => { navigate("/KeyboardList") }}>키보드</Dropdown.Item>
                  <Dropdown.Item eventKey="5" onClick={() => { navigate("/HeadsetList") }}>헤드셋</Dropdown.Item>
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
                  <SwiperSlide><img src="http://127.0.0.1:8898/images/banner_bg.jpg" onClick={() => { navigate("/desktoplist") }} /></SwiperSlide>
                  <SwiperSlide><img src="http://127.0.0.1:8898/images/laptop1.jpg" onClick={() => { navigate("/laptoplist") }} /></SwiperSlide>
                  <SwiperSlide><img src="http://127.0.0.1:8898/images/mouse1.jpg" onClick={() => { navigate("/MouseList") }} /></SwiperSlide>
                  <SwiperSlide><img src="http://127.0.0.1:8898/images/keyboard1.jpg" onClick={() => { navigate("/KeyboardList") }} /></SwiperSlide>
                  <SwiperSlide><img src="http://127.0.0.1:8898/images/headset1.jpg" onClick={() => { navigate("/HeadsetList") }} /></SwiperSlide>

                </Swiper>
              </div>
              <div style={{ padding: "10px", position: 'relative', left: '423px' }}>
                {[DropdownButton].map((DropdownType, idx) => (
                  <DropdownType
                    as={ButtonGroup}
                    key={idx}
                    id={`dropdown-button-drop-${idx}`}
                    size="sm"
                    variant="secondary"
                    title="정렬하기"
                  >
                    <Dropdown.Item eventKey="1" onClick={() => {
                      let temp = [...desktops]
                      temp = temp.sort((a, b) => {
                        return a.price2 - b.price2
                      })
                      setDesktop(temp)
                    }}>낮은 가격순</Dropdown.Item>
                    <Dropdown.Item eventKey="2" onClick={() => {
                      let temp = [...desktops]
                      temp = temp.sort((a, b) => {
                        return b.price2 - a.price2
                      })
                      setDesktop(temp)
                    }}>높은 가격순</Dropdown.Item>
                  </DropdownType>
                ))}
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

              <div className='footer'>
                <p style={{color:'gray', textAlign:'left', marginLeft:'10rem', marginTop:'2rem'}}>
                  작성자 : 최정우<br/>
                  주제 : PC 판매 마켓<br/>
                  프로젝트기간 : 9월 19일 ~ 9월 30일<br/>
                  사용한 기술 : (HTML, CSS, JavaScript, React)<br/>
                  사용한 툴 : Visual Studio Code
                </p>
              </div>
            </div>
          }
        />    
      






        <Route path="/ProductDetail/:id" element={<ProductDetail desktops={desktops} />} />
        <Route path="/desktoplist/*" element={<DesktopList />} />
        <Route path="/LaptopDetail/:id" element={<LaptopDetail Laptops={Laptops} />} />
        <Route path="/laptoplist/*" element={<LaptopList />} />
        <Route path="/MouseDetail/:id" element={<MouseDetail mouses={mouses} />} />
        <Route path="/MouseList/*" element={<MouseList />} />
        <Route path="/KeyboardDetail/:id" element={<KeyboardDetail keyboards={keyboards} />} />
        <Route path="/KeyboardList/*" element={<KeyboardList />} />
        <Route path="/HeadsetDetail/:id" element={<HeadsetDetail headsets={headsets} />} />
        <Route path="/HeadsetList/*" element={<HeadsetList />} />
        <Route path="/login" element={<UserLogin showLogin={showLogin} setShowLogin={setShowLogin} />} />
        <Route path="/join" element={<UserJoin />} />

        <Route path="*" element={<div>잘못된 경로 입니다. 뒤로가기를 해주세요.1</div>} />

      </Routes>
    </div>
  );
}

export default App;