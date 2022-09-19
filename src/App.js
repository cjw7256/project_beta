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
            <Nav.Link onClick={() => { navigate("/") }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate("/menu") }}>Menu</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
