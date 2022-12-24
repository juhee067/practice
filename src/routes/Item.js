import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Item = (props) => {
  // 유저가 url파라미터에 입력한 거 가져오기위해 사용
  let { id } = useParams();
  useEffect(() => {
    // mount,update(재렌더링)시 여기 코드 실행
    // 실행 시점 : html 렌더링이 다 되고나서 실행
    // 쓸데없는, 오래걸리는 코드는 여기에 적는 것이 관습
    // ex) 어려운연산, 서버에서 데이터 가지고 올 때, 타이머
    let a = setTimeout(() => {
      setTime(false);
    }, 2000);
    // useEffect 동작 전에 실행이 됨 / 명칭: clean up function
    // clean up function : mount시에는 실행안됨, unmount시 실행됨
    return () => {
      // 기존 데이터 요청은 제거해주세요
      clearTimeout(a);
    };
  }, []);
  // [실행조건]-> [state] 얘가 변할때마다 실행
  let [count, setCount] = useState(0);
  let [time, setTime] = useState(true);
  const ItemId = props.shoes.find((e) => e.id == id);
  // 숫자말고 다른 걸 입력했을 때 alert 창 띄우기
  let [text, setText] = useState(true);
  useEffect(() => {
    if (isNaN(text) == true) {
      alert("그러지마세요");
    }
  }, [text]);
  return (
    <div className="container">
      <div className="alert alert-warning">
        {time === true ? <h1>2초이내구매.</h1> : null}
      </div>
      <div className="row">
        <div className="col-md-6">
          {count}
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            클릭
          </button>
          <input
            type="text"
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></input>
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{ItemId.title}</h4>
          <p>{ItemId.content}</p>
          <p>{ItemId.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
        {/* url 파라미터에 이상한 거 입력하면 id라는 변수가 이상하면 상품없다는 ul 보여주면 된다. */}
      </div>
    </div>
  );
};

export default Item;
