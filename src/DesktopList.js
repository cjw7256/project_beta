import './App.css';
import {
    Button, Navbar, Nav,
    Container, Row, Col, Card,
    DropdownButton, SplitButton,
    ButtonGroup, Dropdown, Spinner
} from "react-bootstrap";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import DesktopCard from './components/DesktopCard.js'
import ProductDetail from "./components/ProductDetail.js";

import axios from "axios";

function DesktopList() {
    let navigate = useNavigate();
    let [getCnt, setGetCnt] = useState(2); // 1 2 3 //get 조회 기준
    let [showMore, setShowMore] = useState(true); //더보기
    let [showSpinner, setShowSpinner] = useState(false);


    let [desktops, setDesktops] = useState([
        {
            id: 'ds001',
            itemName: 'com001',
            content: '최신형 데스크탑',
            price: '1,000,000원',
            imgPath: "http://192.168.0.63:8898/images/computer1.jpg"
        },
        {
            id: 'ds002',
            itemName: 'com002',
            content: '그저그런 데스크탑',
            price: '800,000원',
            imgPath: "http://192.168.0.63:8898/images/computer2.jpg"
        },
        {
            id: 'ds003',
            itemName: 'com003',
            content: '구형 데스크탑',
            price: '600,000원',
            imgPath: "http://192.168.0.63:8898/images/computer3.jpg"
        },

    ])






    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
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

                            {
                                //더보기를 눌렀을때~ 로딩중일때~
                                //눌렀을때 스피너가 돌고
                                //끝나면 스피너가 사라지고
                                showSpinner == true ? (
                                    <div>
                                        <Spinner animation="border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </Spinner>
                                    </div>
                                ) : null
                            }

                            {showMore == true ? (
                                <Button
                                    variant="success"
                                    onClick={() => {
                                        const urlPath =
                                            "http://192.168.0.63:8898/desktopData/list" +
                                            getCnt + //2
                                            ".json"
                                        //2 호출 -> 3 호출
                                        //3
                                        setShowSpinner(true);
                                        axios
                                            .get(urlPath)
                                            .then((value) => {
                                                // console.log(value.data[0]);  //출력하려는 데이터 조회 from server
                                                let temp = [...desktops]; // [1,2,3,4]
                                                for (
                                                    let i = 0;
                                                    i < value.data.length;
                                                    i++ //3, 0 1 2
                                                ) {
                                                    temp.push(value.data[i]); //배열에 하나씩 넣어야하는 객체
                                                }
                                                setDesktops(temp);
                                                //getCnt = 3
                                                const tempCnt = getCnt + 1;
                                                setGetCnt(getCnt + 1);
                                                if (tempCnt > 3) {
                                                    setShowMore(false);
                                                }
                                                // setShowSpinner(false);
                                            })
                                            .catch(() => {
                                                console.log("뭔가 잘못된거");
                                                // setShowSpinner(false);
                                            })
                                            .finally(() => {
                                                setShowSpinner(false);
                                            })
                                        //서버 통신 axios.get 가져와서
                                        //foods 배열 추가
                                        // setShowMore(false);
                                    }}
                                >
                                    더보기...
                                </Button>
                            ) : null}
                        </div>
                    }
                />
                <Route path="/ProductDetail/:id" element={<ProductDetail desktops={desktops} />} />
                <Route path="*" element={<div>잘못된 경로 입니다. 뒤로가기를 해주세요.</div>} />

            </Routes>
        </div>
    );
}

export default DesktopList;
