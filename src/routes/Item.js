import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";

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

  let [tap, setTap] = useState(0);
  // useState(0)-> 0번째 내용이 보이는 상태
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
      <Nav variant="tabs" defaultActiveKey="link0">
        {/* defaultActiveKey: 기본으로 눌려있는 버튼 */}
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTap(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTap(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTap(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {/* {tap == 0 ? <div>내용0</div> : null}
      {tap == 1 ? <div>내용1</div> : null}
      {tap == 2 ? <div>내용2</div> : null} */}

      <TapContent tap={tap} />
    </div>
  );
};
// component는 꼭 return문을 사용해줘야함
// props.tap 쓰기 귀찮으면 tap={tap} 여기서 {tap}을 가져다 쓰면 됨
// function TapContent({ tap }) {
//   if (tap == 0) {
//     return <div>내용0</div>;
//   } else if (tap == 1) {
//     return <div>내용1</div>;
//   } else if (tap == 2) {
//     return <div>내용2</div>;
//   }
// }
function TapContent({ tap }) {
  let [fade, setFade] = useState("");
  useEffect(() => {
    // end를 붙이는 시점을 뒤로 미룬다
    setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      setFade("");
    };
  }, [tap]);
  // if문없이 작성하기. 내용을 array에 넣고 [tap]이라는 state 넣기
  return (
    // 변수를 문자 중간에 변경시키고 싶으면  {} 넣으면 됨
    <div className={`start ${fade}`}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tap]}
    </div>
  );
}
export default Item;
