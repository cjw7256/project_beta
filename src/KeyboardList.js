import './App.css';
import { Container, Row,Button } from "react-bootstrap";
import { Routes, Route, } from "react-router-dom";
import { useState } from 'react';
import KeyboardCard from './components/KeyboardCard.js'
import KeyboardDetail from "./components/KeyboardDetail.js";


function KeyboardList() {


  let [keyboards, setKeyboards] = useState([

    {
      id: 'ks001',
      itemName: 'SPA-NKG2CUB텐키리스 기계식키보드',
      content: '접점 방식:기계식 스위치\n키수:87키\n소비 전류:250mA\n무게:775g',
      price: '65,000원',
      price2: 65000,
      imgPath: "http://192.168.0.63:8898/images/keyboard1.jpg"
    },
    {
      id: 'ks002',
      itemName: 'SPA-KKG1CUB LED 기계식 키보드 청축',
      content: '접점 방식:기계식 스위치\n키수:104키\n소비 전류:300mA\n무게:924g',
      price: '59,800원',
      price2: 59800,
      imgPath: "http://192.168.0.63:8898/images/keyboard2.jpg"
    },
    {
      id: 'ks003',
      itemName: 'MANIC X40 4세대 광축 기계식 키보드',
      content: '키보드 방식:축교환식 광축\n키 개수:104 Key\n폴링레이트:1000Hz\n무게:1243g',
      price: '38,500원',
      price2: 35800,
      imgPath: "http://192.168.0.63:8898/images/keyboard3.jpg"
    },
    {
      id: 'ks004',
      itemName: 'MANIC X48 4세대 광축 기계식 키보드',
      content: '키보드 방식:축교환식 광축\n키 개수:104 Key\n폴링레이트:1000Hz\n무게:1243g',
      price: '41,800원',
      price2: 41800,
      imgPath: "http://192.168.0.63:8898/images/keyboard4.jpg"
    },
    {
      id: 'ks005',
      itemName: 'MANIC X50 4세대 광축 기계식 키보드',
      content: '키보드 방식:JIXIAN 4.0 광축 스위치\n키 개수:104 Key\n폴링레이트:1000Hz\n무게:1080g',
      price: '47,300원',
      price2: 47300,
      imgPath: "http://192.168.0.63:8898/images/keyboard5.jpg"
    },
    {
      id: 'ks006',
      itemName: '워프 WK3 블루투스 게이밍 기계식 키보드',
      content: '스위치:MANIC SWITCH\n키 개수:87 Key\n폴링레이트:1000Hz\n무게:817g',
      price: '81,400원',
      price2: 81400,
      imgPath: "http://192.168.0.63:8898/images/keyboard6.jpg"
    },
    {
      id: 'ks007',
      itemName: '메카 ZK2 마닉축 RGB 게이밍 기계식 키보드',
      content: '스위치:MANIC SWITCH\n키 개수:104 Key\n폴링레이트:1000Hz\n무게:1087g',
      price: '69,300원',
      price2: 69300,
      imgPath: "http://192.168.0.63:8898/images/keyboard7.jpg"
    },
    {
      id: 'ks008',
      itemName: '워프 WK2 마닉축 RGB 게이밍 기계식 키보드 청축',
      content: '스위치:MANIC SWITCH\n키 개수:104 Key\n폴링레이트:1000Hz\n무게:1184g',
      price: '66,000원',
      price2: 66000,
      imgPath: "http://192.168.0.63:8898/images/keyboard8.jpg"
    },
    {
      id: 'ks009',
      itemName: '제닉스 기계식 키보드 스톰엑스제로 브라운',
      content: '키 스위치:(청축, 갈축, 적축) 선택\n레이아웃:한글 104키\n측면 배열:스탭 스컬처 2\n무게:1.2Kg',
      price: '59,900원',
      price2: 59900,
      imgPath: "http://192.168.0.63:8898/images/keyboard9.jpg"
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
                  let temp = [...keyboards]
                  temp = temp.sort((a, b) => {
                    return a.price2 - b.price2
                  })
                  setKeyboards(temp)
                }}>가격이 낮은순으로 정렬</Button>
                <br/>
                <br/>
                <Button onClick={() => {
                  let temp = [...keyboards]
                  temp = temp.sort((a, b) => {
                    return b.price2 - a.price2
                  })
                  setKeyboards(temp)
                }}>가격이 높은순으로 정렬</Button>
              </div>

              <Container>
                <Row sm={1} md={3}>
                  {keyboards.map((data, i) => {
                    return (
                      <KeyboardCard key={data.id} keyboards={keyboards} keyboard={data} i={i} />
                    );
                  })}
                </Row>
              </Container>

            </div>
          }
        />
        <Route path="/KeyboardDetail/:id" element={<KeyboardDetail keyboards={keyboards} />} />
        <Route path="*" element={<div>잘못된 경로 입니다. 뒤로가기를 해주세요.111</div>} />

      </Routes>
    </div>
  );
}

export default KeyboardList;
