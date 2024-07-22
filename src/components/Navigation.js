import React from "react";
import { Link } from "react-router-dom";

// Navigation이라는 이름의 함수형 컴포넌트를 정의
function Navigation() {
  // 컴포넌트가 렌더링할 JSX를 반환
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
