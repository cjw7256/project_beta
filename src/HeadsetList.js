import './App.css';
import { Container, Row, Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import { Routes, Route, } from "react-router-dom";
import { useState } from 'react';
import HeadsetCard from './components/HeadsetCard.js'
import HeadsetDetail from "./components/HeadsetDetail.js";


function HeadsetList() {


  let [headsets, setHeadsets] = useState([

    {
      id: 'hs001',
      itemName: 'MANIC HS-600 7.1CH',
      content: 'Sound:Stereo Virtual 7.1CH\nSpeaker Sensitivity:119dB\nMicrophone Sensitivity:-42dB\nWeight:300g',
      price: '52,500원',
      price2: 52500,
      imgPath: "http://192.168.0.63:8898/images/headset1.jpg"
    },
    {
      id: 'hs002',
      itemName: '제닉스 TITAN WH7 무선 게이밍 헤드셋',
      content: '충전 시간:4~5시간\n사용시간:LED 작동시: 약11시간 / 비작동시 약 20시간\n감도:(스피커)88dBV / (마이크)-36dBV\n무게:310g',
      price: '88,900원',
      price2: 88900,
      imgPath: "http://192.168.0.63:8898/images/headset2.jpg"
    },
    {
      id: 'hs003',
      itemName: '제닉스 TITAN WH5 무선 게이밍 헤드셋',
      content: '충전 시간:3시간\n사용시간:LED 작동시: 약8시간 / 비작동시 약 11시간\n감도:(스피커)104dBV / (마이크)-42dBV\n무게:345g',
      price: '79,900원',
      price2: 79900,
      imgPath: "http://192.168.0.63:8898/images/headset3.jpg"
    },
    {
      id: 'hs004',
      itemName: '레이저 크라켄X USB헤드셋',
      content: '사운드:7.1 서라운드 사운드\n주파수 응답: 100Hz-10kHz\n감도:106dB\n무게:275g',
      price: '52,500원',
      price2: 52500,
      imgPath: "http://192.168.0.63:8898/images/headset4.jpg"
    },
    {
      id: 'hs005',
      itemName: 'Barracuda X Plus 바라다쿠다 엑스 플러스 무선헤드셋',
      content: '플랫폼:4-IN-1 멀티 플랫폼 연결\n주파수:20Hz~20kHz\n감도:96dBSPL/mW@1KHz\n무게:270g',
      price: '149,000원',
      price2: 149000,
      imgPath: "http://192.168.0.63:8898/images/headset5.jpg"
    },
    {
      id: 'hs006',
      itemName: '로지텍 USB 스테레오 헤드셋 H570e',
      content: '타이핑:양방향ECM\n주파수:100Hz-18KHz\n감도:(마이크)-47dB/(스피커)94dB\n무게:111g',
      price: '60,500원',
      price2: 60500,
      imgPath: "http://192.168.0.63:8898/images/headset6.jpg"
    },
    {
      id: 'hs007',
      itemName: 'Kraken V3 크라켓 게이밍 헤드셋',
      content: '주파수 응답:20Hz-20kHz\n감도:96dBSPL/mW\n가상 서라운드 인코딩:THX Spatial Audio\n무게:325g',
      price: '149,000원',
      price2: 149000,
      imgPath: "http://192.168.0.63:8898/images/headset7.jpg"
    },
    {
      id: 'hs008',
      itemName: '고급형 F5 블루투스 무선헤드셋',
      content: '블루투스 버전:Bluetooth v4.1\n음압레벨:118dB\n사용시간:충전시간:2시간/사용시간14시간\n무게:250g',
      price: '59,900원',
      price2: 59900,
      imgPath: "http://192.168.0.63:8898/images/headset8.jpg"
    },
    {
      id: 'hs009',
      itemName: '로지텍 G435 LIGHTSPEED 무선 게이밍 헤드셋',
      content: '주파수:20Hz-20KHz\n민감도:83.1dB SPL/mW\n사용시간:18시간\무게:165g',
      price: '99,000원',
      price2: 99000,
      imgPath: "http://192.168.0.63:8898/images/headset9.jpg"
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
                      let temp = [...headsets]
                      temp = temp.sort((a, b) => {
                        return a.price2 - b.price2
                      })
                      setHeadsets(temp)
                    }}>낮은 가격순</Dropdown.Item>
                    <Dropdown.Item eventKey="2" onClick={() => {
                      let temp = [...headsets]
                      temp = temp.sort((a, b) => {
                        return b.price2 - a.price2
                      })
                      setHeadsets(temp)
                    }}>높은 가격순</Dropdown.Item>
                  </DropdownType>
                ))}
              </div>

              <Container>
                <Row sm={1} md={3}>
                  {headsets.map((data, i) => {
                    return (
                      <HeadsetCard key={data.id} headsets={headsets} headset={data} i={i} />
                    );
                  })}
                </Row>
              </Container>

            </div>
          }
        />
        <Route path="/HeadsetDetail/:id" element={<HeadsetDetail headsets={headsets} />} />
        <Route path="*" element={<div>잘못된 경로 입니다. 뒤로가기를 해주세요.111</div>} />

      </Routes>
    </div>
  );
}

export default HeadsetList;
