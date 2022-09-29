import './App.css';
import { Container, Row, Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import { Routes, Route, } from "react-router-dom";
import { useState } from 'react';
import DesktopCard from './components/DesktopCard.js'
import ProductDetail from "./components/ProductDetail.js";
import computer1 from './images/computer1.jpg'
import computer2 from './images/computer2.jpg'
import computer3 from './images/computer3.jpg'
import computer4 from './images/computer4.jpg'
import computer5 from './images/computer5.jpg'
import computer6 from './images/computer6.jpg'
import computer7 from './images/computer7.jpg'
import computer8 from './images/computer8.jpg'
import computer9 from './images/computer9.jpg'

function DesktopList() {
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
