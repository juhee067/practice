import { configureStore, createSlice } from "@reduxjs/toolkit";
//useState 개념
let user = createSlice({
  name: "user",
  initialState: "kim",
  //   state 수정 함수 만들기
  reducer: {
    changeName(state) {
      return "john" + state;
    },
  },
});
// 만든 함수 빼기
let { changeName } = user.actions;
let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
});

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
