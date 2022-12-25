import "./App.css";
import { Navbar, Container, Nav, NavItem } from "react-bootstrap";

import Product from "./components/Product";
import data from "./data/data";
import { useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Item from "./routes/Item";
import About from "./routes/About";
import axios from "axios";
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
                  <button
                    onClick={() => {
                      // 로딩중 ui 띄우기
                      // 원래는 서버와 문자만 주고받을 수 있다
                      // "{ name: "kim" }" 따옴표 쳐놓으면 array,object도 주고받기 가능 : json 문법
                      // axios는 알아서 json으로 문법 변경해줌
                      // fetch 사용 할 경우 :
                      // fetch('url')
                      // .then(result=>result.json())->object/array을 json으로 변환과정필요
                      // .then(data=>{})
                      axios
                        .get("https://codingapple1.github.io/shop/data2.json")
                        .then((result) => {
                          console.log(result);
                          // 실제 데이터만 출력해보고 싶다 : result.data
                          let plusItem = [...shoes, ...result.data];
                          setShoes(plusItem);
                          // 로딩중 ui 숨기기
                        });
                      // 서버로 데이터 전송하는 post
                      axios.post("/url", { name: "kim" });
                      // 동시에 ajax요청 여러개 하려면
                      // Promise.all([axios.get("/url1")], [axios.get("/url2")]);
                      // .then(()=>{})
                      // ajax 요청 실패할 경우 : catch
                      // .catch(() => {
                      //   console.log("실패");

                      //   // 로딩중 ui 숨기기
                      // });
                    }}
                  >
                    데이터 요청
                  </button>
                  {/* ajax 3가지 방법
                  1. XMLHttpRequest
                  2. fetch()
                  3. axios
                  */}
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
