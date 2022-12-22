import "./App.css";
import { Navbar, Container, Nav, NavItem } from "react-bootstrap";

import Product from "./components/Product";
import data from "./data/data";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Item from "./components/Item";
function App() {
  let [shoes] = useState(data);
  return (
    <div className="App">
      <Navbar variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link className="menu" href="#Letter">
              Letter
            </Nav.Link>
            <Nav.Link className="menu" href="#Gift">
              Gift
            </Nav.Link>
            <Nav.Link className="menu" href="#Home">
              Home
            </Nav.Link>
            <Nav.Link className="menu" href="#Writing">
              Writing a Letter
            </Nav.Link>
            <Nav.Link className="menu" href="#Camera">
              Camera
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>
      <Link to="/about">어바웃</Link>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {" "}
              <div className="main-bg"></div>{" "}
              <div className="container">
                <div className="row">
                  {shoes.map((a, i) => {
                    return <Product shoes={shoes[i]} item={i} />;
                  })}
                </div>
              </div>{" "}
            </div>
          }
        />
        <Route path="/detail" element={<div>보여질 영역 : 상세페이지</div>} />
        <Route path="/about" element={<Item />} />
      </Routes>
    </div>
  );
}

export default App;
