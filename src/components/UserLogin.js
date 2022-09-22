import {Form, Button,} from "react-bootstrap";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


function UserLogin() {
    let navigate = useNavigate();



    return (
        <div className="loginBox">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="아이디 입력" />
                    <Form.Text className="text-muted">
                
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="비밀번호 입력" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(e) => {
                    
                    alert('로그인 하셨습니다.')
                    
                    navigate("/") }}>
                    로그인
                </Button>
            </Form>
        </div>
    );
}

export default UserLogin;
