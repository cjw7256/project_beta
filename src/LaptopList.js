import './App.css';
import { Container, Row, Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import { Routes, Route, } from "react-router-dom";
import { useState } from 'react';
import LaptopCard from './components/LaptopCard.js'
import LaptopDetail from "./components/LaptopDetail.js";
import laptop1 from './images/laptop1.jpg'
import laptop2 from './images/laptop2.jpg'
import laptop3 from './images/laptop3.jpg'
import laptop4 from './images/laptop4.jpg'
import laptop5 from './images/laptop5.jpg'
import laptop6 from './images/laptop6.jpg'
import laptop7 from './images/laptop7.jpg'
import laptop8 from './images/laptop8.jpg'
import laptop9 from './images/laptop9.jpg'

function LaptopList() {


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


  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>

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
                      let temp = [...Laptops]
                      temp = temp.sort((a, b) => {
                        return a.price2 - b.price2
                      })
                      setLaptops(temp)
                    }}>낮은 가격순</Dropdown.Item>
                    <Dropdown.Item eventKey="2" onClick={() => {
                      let temp = [...Laptops]
                      temp = temp.sort((a, b) => {
                        return b.price2 - a.price2
                      })
                      setLaptops(temp)
                    }}>높은 가격순</Dropdown.Item>
                  </DropdownType>
                ))}
              </div>

              <Container>
                <Row sm={1} md={3}>
                  {Laptops.map((data, i) => {
                    return (
                      <LaptopCard key={data.id} Laptops={Laptops} laptop={data} i={i} />
                    );
                  })}
                </Row>
              </Container>

            </div>
          }
        />
        <Route path="/LaptopDetail/:id" element={<LaptopDetail Laptops={Laptops} />} />
        <Route path="*" element={<div>잘못된 경로 입니다. 뒤로가기를 해주세요.111</div>} />

      </Routes>
    </div>
  );
}

export default LaptopList;
