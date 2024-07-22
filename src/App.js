import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import About from "./routes/About";
import Detail from "./routes/Detail";
// App 컴포넌트에 대한 CSS를 가져옴
import "./App.css";

// App 함수형 컴포넌트를 정의
function App() {
  // 컴포넌트가 렌더링하는 JSX를 반환
  return (
    // HashRouter 컴포넌트를 사용하여 라우팅을 설정
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/movie-detail" element={<Detail />} />
    </HashRouter>
  );
}

// App 컴포넌트를 export하여 다른 파일에서 import하여 사용할 수 있게 함
export default App;
