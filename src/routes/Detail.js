import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
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
  // find는 array 뒤에 붙임
  let findProduct = props.shoes.find(function (a) {
    return a.id == id;
  });
  //  let findProduct = props.shoes.find((x)=>x.id==id)
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
  useEffect(() => {}, []);
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
      <input type="text"></input>
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
    </div>
  );
};

export default Detail;
