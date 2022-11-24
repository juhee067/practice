import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import "./App.css";
import data from "./data.js";
import Product from "./routes/Product.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail";
import About from "./About";
import Event from "./routes/Event";
function App() {
  let [shoes] = useState(data);
  // page 이동을 도와주는 함수
  let navigate = useNavigate();
  return (
    <div className="App">
      <Button variant="primary">Primary</Button>{" "}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            {/* 링크태그를 사용하면 그냥 a태그 같은 개념 */}
            {/*  onClick={() => {navigate(1);}} :숫자 적으면 앞으로 한페이지 이동 -1은 뒤로 */}
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Features
            </Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {" "}
              <div>
                <div className="main-bg"></div>
                <div className="container">
                  <div className="row">
                    {shoes.map((a, i) => {
                      return <Product shoes={shoes[i]} i={i} key={i} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        {/* Nested Routes : 태그안에 태그 넣기
        장점 : element가 2개 동시에 보임*/}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<h4>멤버임</h4>} />
          <Route path="location" element={<h4>지역임</h4>} />
        </Route>
        <Route path="/Event" element={<Event />}>
          <Route
            path="one"
            element={<div>첫주문시 양배추즙 서비스</div>}
          ></Route>
          <Route path="two" element={<div>생일 기념 쿠폰받기</div>}></Route>
        </Route>
        {/* 없는 페이지 (404page) */}
        <Route path="*" element={<div>없는페이지에요</div>} />
      </Routes>
    </div>
  );
}

export default App;
