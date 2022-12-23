import "./App.css";
import { Navbar, Container, Nav, NavItem } from "react-bootstrap";

import Product from "./components/Product";
import data from "./data/data";
import { useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Item from "./routes/Item";
import About from "./routes/About";
function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  //페이지 이동을 도와주는 함수
  return (
    <div className="App">
      <Navbar variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link
              className="menu"
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link
              className="menu"
              onClick={() => {
                navigate(1);
                // (1)앞으로 한페이지 이동해주세요
                // (-1)뒤로 한페이지 이동해주세요
              }}
            >
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
                <div>
                  <button
                    onClick={() => {
                      let itemArray = [...shoes];
                      itemArray = itemArray.sort((a, b) =>
                        a.title.localeCompare(b.name)
                      );
                      setShoes(itemArray);
                      console.log(itemArray);
                    }}
                  >
                    가나다정렬
                  </button>
                </div>
              </div>{" "}
            </div>
          }
        />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임1</div>} />
          <Route path="location" element={<div>위치정보임2</div>} />
        </Route>
        {/* nested routes :  tag 안에 tag
        장점 : nested route 접속시엔 element 2개나 보임-> 어디 보여줄지 작성해야함
여러 유사한 페이지 필요할 때
        */}
        <Route path="/detail/:id" element={<Item shoes={shoes} />} />

        <Route path="*" element={<div>없는 페이지에요</div>} />
        {/* 지정해놓은 라우터 이 외에 모든 것 : 404 페이지 */}
      </Routes>
    </div>
  );
}

export default App;
