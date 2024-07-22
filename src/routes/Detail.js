import React from "react";

// Detail이라는 이름의 클래스 컴포넌트를 정의
class Detail extends React.Component {
  // 컴포넌트가 마운트되면 실행되는 메소드
  componentDidMount() {
    // props에서 location과 history를 추출
    const { location, history } = this.props;
    // location.state가 undefined라면, 즉, 상태가 정의되지 않았다면
    // history.push를 사용하여 홈("/")으로 이동
    if (location.state === undefined) {
      history.push("/");
    }
  }

  // 컴포넌트를 렌더링하는 메소드
  render() {
    // props에서 location을 추출
    const { location } = this.props;
    // location.state가 존재한다면, 즉, 상태가 정의되어 있다면
    // location.state.title을 화면에 표시
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      // location.state가 정의되지 않았다면, null을 반환하여 아무것도 표시하지 않음
      return null;
    }
  }
}

// Detail 컴포넌트를 export하여 다른 파일에서 import하여 사용할 수 있게 함
export default Detail;
