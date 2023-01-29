import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const Cart = () => {
  // Redux store 가지고옴
  //   useSelector 편하게 쓰려면 (()=>{안에는 어떤 state를 쓸지 적어야함 그냥 state적으면 모든 state의미함})
  // Redux store 안에 모든 걸 넣지 맙시다 : 공유가 필요 없으면 그냥 state 사용해라
  let state = useSelector((state) => state);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => (
            <tr key={i}>
              <td>1</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td>안녕</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
