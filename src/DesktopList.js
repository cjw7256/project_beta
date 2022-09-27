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
      itemName: 'DELL 3080 SFF WiFi i5-10505 8G 256G 윈10 Pro',
      content: 'CPU:인텔 코어 i5-10505\n저장장치:SSD 256GB\n메모리:8GB DDR4\n그래픽:intel UHD Graphics',
      price: '799,000원',
      price2: 799000,
      imgPath: "http://192.168.0.63:8898/images/computer1.jpg"
    },
    {
      id: 'ds002',
      itemName: '컴집/게이밍/조립PC',
      content: 'CPU:AMD 라이젠 5-4세대 5600X 3.7G\n저장장치:SSD 512GB\n메모리:16GB DDR4\n그래픽:지포스 RTX3060 D6 12G',
      price: '1,029,000원',
      price2: 1029000,
      imgPath: "http://192.168.0.63:8898/images/computer2.jpg"
    },
    {
      id: 'ds003',
      itemName: '컴집/게이밍/조립PC',
      content: 'CPU:인텔12세대-i5 12400F 2.5G\n저장장치:SSD 512GB\n메모리:16GB DDR4\n그래픽:지포스 RTX3060 D6 12G',
      price: '1,069,000원',
      price2: 1069000,
      imgPath: "http://192.168.0.63:8898/images/computer3.jpg"
    },    
    {
      id: 'ds004',
      itemName: 'NEW.신상 특별한이벤트.삼성정품.DM500SD/사은품증정~최다판매.고성능NVMe',
      content: 'CPU:인텔 12세대 Pentium 듀얼코어 G7400\n저장장치:SSD 256GB\n메모리:4GB DDR4\n그래픽:intel UHD Graphics 710',
      price: '648,000원',
      price2: 648000,
      imgPath: "http://192.168.0.63:8898/images/computer4.jpg"
    },
    {
      id: 'ds005',
      itemName: 'LG일체형PC 27V70N-GR3SK 27인치 10세대i3 8GB 256GB win11 올인원 PC 데스크탑 컴퓨터',
      content: 'CPU:10세대 인텔 코어 i3-10110U\n저장장치:SSD 256GB\n메모리:8GB DDR4\n그래픽:intel UHD Graphics',
      price: '929,000원',
      price2: 929000,
      imgPath: "http://192.168.0.63:8898/images/computer5.jpg"
    },
    {
      id: 'ds006',
      itemName: 'DELL 3080 SFF WiFi i5-10505 8G 256G 윈10 Pro',
      content: 'CPU:인텔 코어 i3-1115G4 Processor\n저장장치:SSD 256GB\n메모리:8GB DDR4\n그래픽:intel UHD Graphics',
      price: '858,000원',
      price2: 858000,
      imgPath: "http://192.168.0.63:8898/images/computer6.jpg"
    },
    {
      id: 'ds007',
      itemName: '굿워크 D214N 인텔 10th i5-10400 데스크탑 그레이',
      content: 'CPU:10세대 인텔 코어 i5-10400\n저장장치:SSD 240GB\n메모리:8GB DDR4\n그래픽:intel UHD 630',
      price: '630,520원',
      price2: 630520,
      imgPath: "http://192.168.0.63:8898/images/computer7.jpg"
    },
    {
      id: 'ds008',
      itemName: '리오나인터보 CG256XR66 라이젠5600X RX6600 게이밍PC',
      content: 'CPU:AMD Ryzen5 5600X 버미어\n저장장치:SSD 512GB\n메모리:16GB DDR4\n그래픽:AMD 라데온 RX 6600',
      price: '1,156,840원',
      price2: 1156840,
      imgPath: "http://192.168.0.63:8898/images/computer8.jpg"
    },
    {
      id: 'ds009',
      itemName: '라이젠 R5 5600X_GTX1660SUPER 게이밍컴퓨터 조립PC',
      content: 'CPU:라이젠 R5 5600X\n저장장치:SSD 512GB\n메모리:16GB DDR4\n그래픽:지포스 GTX 1660 SUPER 6GB',
      price: '889,000원',
      price2: 889000,
      imgPath: "http://192.168.0.63:8898/images/computer9.jpg"
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
