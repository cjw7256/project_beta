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

import axios from "axios";

function DesktopList() {
    let navigate = useNavigate();
    let [desktops, setDesktop] = useState([

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
        {
            id: 'ds004',
            itemName: 'com004',
            content: '최신형 데스크탑',
            price: '1,000,000원',
            imgPath: "http://192.168.0.63:8898/images/computer4.jpg"
        },
        {
            id: 'ds005',
            itemName: 'com005',
            content: '그저그런 데스크탑',
            price: '800,000원',
            imgPath: "http://192.168.0.63:8898/images/computer5.jpg"
        },
        {
            id: 'ds006',
            itemName: 'com006',
            content: '구형 데스크탑',
            price: '600,000원',
            imgPath: "http://192.168.0.63:8898/images/computer6.jpg"
        },
        {
            id: 'ds007',
            itemName: 'com007',
            content: '최신형 데스크탑',
            price: '1,000,000원',
            imgPath: "http://192.168.0.63:8898/images/computer7.jpg"
        },
        {
            id: 'ds008',
            itemName: 'com008',
            content: '그저그런 데스크탑',
            price: '800,000원',
            imgPath: "http://192.168.0.63:8898/images/computer8.jpg"
        },
        {
            id: 'ds009',
            itemName: 'com009',
            content: '구형 데스크탑',
            price: '600,000원',
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
                <Route path="*" element={<div>잘못된 경로 입니다. 뒤로가기를 해주세요.</div>} />


            </Routes>
        </div>
    );
}

export default DesktopList;
