import {
    Form, Button,
} from "react-bootstrap";

function UserJoin() {

    return (
        <div className="loginBox">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicId">
                    <Form.Control type="text" placeholder="아이디 입력" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="비밀번호 입력" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="이메일 입력" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    로그인
                </Button>
            </Form>
        </div>
    );
}

export default UserJoin;
