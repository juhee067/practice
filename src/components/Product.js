import React from "react";
import { useState } from "react";
import data from "../data/data";
const Product = (props) => {
  let [shoes] = useState(data);
  return (
    <div>
      <div className="col-md-4">
        {/* public 폴더 이미지 쓰는 권장 방식
            src={process.env.PUBLIC_URL + '이미지.jpg'}
            */}
        <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" />
        <h2>{props.title}</h2>
        <p>{props.price}</p>
      </div>
    </div>
  );
};

export default Product;
