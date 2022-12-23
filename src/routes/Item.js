import React from "react";
import { useParams } from "react-router-dom";

const Item = (props) => {
  // 유저가 url파라미터에 입력한 거 가져오기위해 사용
  let { id } = useParams();
  const result1 = arr1.find((item) => (item = id));
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
        {/* url 파라미터에 이상한 거 입력하면 id라는 변수가 이상하면 상품없다는 ul 보여주면 된다. */}
      </div>
    </div>
  );
};

export default Item;
