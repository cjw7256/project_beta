import './App.css';
import { Button, Navbar, Nav, Container, Row, Col, Card, } from "react-bootstrap";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Market</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate("/menu") }}>메뉴</Nav.Link>
          </Nav>
          <Nav className="user-login">
            <Nav.Link onClick={() => { navigate("/login") }}>로그인</Nav.Link>
            <Nav.Link onClick={() => { navigate("/join") }}>회원가입</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="banner"></div>

            </div>
          }
        />
    </Routes>
      









      />
    </div>
  );
}

export default App;
