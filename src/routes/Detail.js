import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
// 컨포넌트를 생성하는 것이라 대문자로
// 단점 : 일반 컨포넌트인지 스타일 컨포넌트인지 헷갈림
// 중복 스타일은 컴포넌트 간 import할텐데 css와 다를 바가 없다
// 협업시 css담당의 숙련도 이슈
// let YellowBtn = styled.button`
//   background: ${(props) => props.bg};
//   color: ${(props) => (props.bg == "blue" ? "white" : "black")};
// `;
// let Box = styled.div`
//   background: grey;
// `;
let YellowBox = styled.div`
  background: yellow;
  width: 100%;
`;

// 하단의 표현을 Lifecycle
// page가 보이는 순간을 페이지가 mount된다고 표현,가끔업데이트 된다 (update) 필요없으면 제거가된다(unmount)
const Detail = (props) => {
  // 유저가 url파라미터에 입력한 거 가져오려면 useParams
  let { id } = useParams();
  let [tap, setTap] = useState(0);

  // find는 array 뒤에 붙임
  //  let findProduct = props.shoes.find((x)=>x.id==id)
  let findProduct = props.shoes.find(function (a) {
    return a.id == id;
  });

  // useEffect는 렌더링 후에 동작합니다
  // 장점: 어려운 코드는 useEffect에 넣어서 작성하면 좋음,서버에서데이터 가져오는 작업할때,타이머 장착할때
  // Effect이름인이유 : 부가기능같은 느낌
  // effect 뒤에 []가 없을때는 mount,update시 실행됨
  // [] 디펜시를 추가하면 state가 변할 때만 실행됨
  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 1000);
    return () => {
      clearTimeout(a);
    };
  }, []);
  // setTimeout(()=>{실행할코드},1000)
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  // input 과제

  let [num, setNum] = useState("");
  useEffect(() => {
    if (isNaN(num) == true) {
      console.log("그러지마세요");
    }
  }, [num]);
  return (
    <div className="container">
      <YellowBox className="timeOut"> styled-component</YellowBox>
      {alert == true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}

      {/* 장점: css까지 안가도됨*/}
      {/* <Box>
        {" "}
        <YellowBtn bg="yellow">버튼</YellowBtn>
      </Box> */}
      {count}
      <input
        onChange={(e) => {
          setNum(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {" "}
        버튼
      </button>
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              props.shoes[id].id + 1
            }.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findProduct.title}</h4>
          <p>{findProduct.content}</p>
          <p>{findProduct.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      {/*  defaultActiveKey : 처음으로 눌려있을 버튼*/}
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          {/* button마다 eventKey라는 속성을 써야함 */}
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              setTap(0);
            }}
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              setTap(1);
            }}
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              setTap(2);
            }}
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tap={tap} />
    </div>
  );
};
// conponent는 return문이 없으면 제 기능을 못한다
// props를 쓰기가 귀찮으면 props라는 단어없이 {tap}사용하면된다
function TabContent({ tap }) {
  if (tap == 0) {
    return <div>내용0</div>;
  } else if (tap == 1) {
    return <div>내용1</div>;
  } else if (tap == 2) {
    return <div>내용2</div>;
  }
}
// if문 없이 만들기
// function TabContent({ tap }) {
//    array로 만들고,tap이라는 state 집어넣기
//   return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tap];
// }

// 전환 애니메이션 만들기
// 1.애니메이션 동작 전 claaName만들기
// 2.애니메이션 동작 후 claaName만들기
// 3.className에 transition속성추가
// 4.원할 때 2번 className부착

export default Detail;
