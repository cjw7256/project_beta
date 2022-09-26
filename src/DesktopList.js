import './App.css';
import { Container, Row,Button } from "react-bootstrap";
import { Routes, Route, } from "react-router-dom";
import { useState } from 'react';
import DesktopCard from './components/DesktopCard.js'
import ProductDetail from "./components/ProductDetail.js";


function DesktopList() {


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


  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>

              <div>
                <Button  onClick={() => {
                  let temp = [...desktops]
                  temp = temp.sort((a, b) => {
                    return a.price2 - b.price2
                  })
                  setDesktop(temp)
                }}>가격이 낮은순으로 정렬</Button>
                <br/>
                <br/>
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
                    //foods 배열 안에 data와 i(인덱스)
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
        <Route path="*" element={<div>잘못된 경로 입니다. 뒤로가기를 해주세요.222</div>} />

      </Routes>
    </div>
  );
}

export default DesktopList;
