import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// ./으로 시작하는건 내파일, 없는건 대부분 라이브러리
import App from "./App";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
