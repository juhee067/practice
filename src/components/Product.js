import React from "react";

const Product = (props) => {
  return (
    <div>
      <div className="col-md-4">
        {/* public 폴더 이미지 쓰는 권장 방식
            src={process.env.PUBLIC_URL + '이미지.jpg'}
            */}
        <img
          src={
            "https://codingapple1.github.io/shop/shoes" +
            (props.item + 1) +
            ".jpg"
          }
          width="80%"
        />
        <h2>{props.shoes.title}</h2>
        <p>{props.shoes.price}</p>
      </div>
    </div>
  );
};

export default Product;
