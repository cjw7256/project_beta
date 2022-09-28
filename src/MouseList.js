import './App.css';
import { Container, Row, Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import { Routes, Route, } from "react-router-dom";
import { useState } from 'react';
import MouseCard from './components/MouseCard.js'
import MouseDetail from "./components/MouseDetail.js";


function MouseList() {


  let [mouses, setMouses] = useState([

    {
      id: 'ms001',
      itemName: '로지텍G402 Hyperion Fury 게이밍마우스',
      content: '해상도:240-4000dpi\nUSB 보고율:1000Hz\n버튼 내구성:2000만 클릭\n무게:144g',
      price: '49,900원',
      price2: 49900,
      imgPath: "http://192.168.0.63:8898/images/mouse1.jpg"
    },
    {
      id: 'ms002',
      itemName: '로지텍 G304 무선 게이밍 마우스',
      content: '해상도:200-12000dpi\nUSB 보고율:1000Hz\n버튼 내구성:1000만 클릭\n무게:99g',
      price: '44,690원',
      price2: 44690,
      imgPath: "http://192.168.0.63:8898/images/mouse2.jpg"
    },
    {
      id: 'ms003',
      itemName: 'AG0102 게이밍 유선 마우스',
      content: '해상도:1800-12800dpi\n스캔율:7000fps\n버튼수:9개\n무게:116g',
      price: '39,900원',
      price2: 39900,
      imgPath: "http://192.168.0.63:8898/images/mouse3.jpg"
    },
    {
      id: 'ms004',
      itemName: '로지텍G402 Hyperion Fury 게이밍마우스',
      content: '해상도:200-4000dpi\nUSB 보고율:1000Hz\n버튼 수:8개\n무게:144g',
      price: '49,900원',
      price2: 49900,
      imgPath: "http://192.168.0.63:8898/images/mouse4.jpg"
    },
    {
      id: 'ms005',
      itemName: 'Microsoft 스컬프트 에고노믹 마우스',
      content: '송수신 장치 버전:Microsoft 2.4GHz\n무선 범위:3m\n무선 플랫폼:독점 2.4GHz\n배터리 수명:최대 12개월',
      price: '49,000원',
      price2: 49000,
      imgPath: "http://192.168.0.63:8898/images/mouse5.jpg"
    },
    {
      id: 'ms006',
      itemName: '마이크로소프트 에고노믹 블루투스 무선마우스',
      content: '무선주파수:2.4GHz 주파수 범위\n무선 범위:5~10m\n배터리 수명:최대 15개월\n무게:113g',
      price: '49,900원',
      price2: 49900,
      imgPath: "http://192.168.0.63:8898/images/mouse6.jpg"
    },
    {
      id: 'ms007',
      itemName: '로지텍 멀티태스킹 무선마우스(M585)',
      content: '해상도:1000dpi\n배터리 수명:최대 24개월*\n무선 범위:약 10M\n무게:101g',
      price: '49,900원',
      price2: 49900,
      imgPath: "http://192.168.0.63:8898/images/mouse7.jpg"
    },
    {
      id: 'ms008',
      itemName: 'SPA-MMG1PUB 게이밍 마우스',
      content: '해상도:200-10000dpi\n스캔율:5000FPS\n버튼 내구성:2천만번 클릭\n무게:126g',
      price: '29,900원',
      price2: 29900,
      imgPath: "http://192.168.0.63:8898/images/mouse8.jpg"
    },
    {
      id: 'ms009',
      itemName: '로지텍G102 게이밍마우스',
      content: '해상도:200-8000dpi\nUSB 보고율:1000Hz\n\n무게:85g',
      price: '25,410원',
      price2: 25410,
      imgPath: "http://192.168.0.63:8898/images/mouse9.jpg"
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
                      let temp = [...mouses]
                      temp = temp.sort((a, b) => {
                        return a.price2 - b.price2
                      })
                      setMouses(temp)
                    }}>낮은 가격순</Dropdown.Item>
                    <Dropdown.Item eventKey="2" onClick={() => {
                      let temp = [...mouses]
                      temp = temp.sort((a, b) => {
                        return b.price2 - a.price2
                      })
                      setMouses(temp)
                    }}>높은 가격순</Dropdown.Item>
                  </DropdownType>
                ))}
              </div>

              <Container>
                <Row sm={1} md={3}>
                  {mouses.map((data, i) => {
                    return (
                      <MouseCard key={data.id} mouses={mouses} mouse={data} i={i} />
                    );
                  })}
                </Row>
              </Container>

            </div>
          }
        />
        <Route path="/MouseDetail/:id" element={<MouseDetail mouses={mouses} />} />
        <Route path="*" element={<div>잘못된 경로 입니다. 뒤로가기를 해주세요.111</div>} />

      </Routes>
    </div>
  );
}

export default MouseList;
