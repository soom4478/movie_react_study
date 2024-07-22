import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// 웹 페이지에서 id가 "root"인 요소를 찾아서 root라는 상수에 저장
// 이 요소는 React 애플리케이션을 웹 페이지에 render할 위치를 나타냄
const root = ReactDOM.createRoot(document.getElementById("root"));
// root 요소에 App 컴포넌트를 render함
root.render(<App />);
