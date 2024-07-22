import React from "react";
import "./About.css";

// About 함수형 컴포넌트를 정의
// year, title, summary, poster, genres라는 props를 받음
function About({ year, title, summary, poster, genres }) {
  // 컴포넌트가 렌더링하는 JSX를 반환
  return (
    <div className="about_container">
      // 첫 번째 span 요소에는 자유에 대한 인용구가 포함되어 있습니다.
      <span>
        "Freedom is the freedom to say that two plus two make four. If that i
        granted, all else follows."
      </span>
      // 두 번째 span 요소에는 인용구의 저자인 George Orwell의 이름과 작품
      제목이 포함되어 있습니다.
      <span>- George Orwell, 1984</span>
    </div>
  );
}

// About 컴포넌트를 export하여 다른 파일에서 import하여 사용할 수 있게 함
export default About;
