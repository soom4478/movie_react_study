import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
// Home 컴포넌트에 대한 CSS를 가져옴
import "./Home.css";

// Home이라는 이름의 클래스 컴포넌트를 정의
class Home extends React.Component {
  // 컴포넌트의 초기 상태를 설정. isLoading은 로딩 상태를, movies는 영화 데이터를 저장
  state = {
    isLoading: true,
    movies: [],
  };

  // 함수 getMovies는 영화 데이터를 가져옴
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    // 상태를 업데이트하여 영화 데이터를 저장하고 로딩 상태를 false로 설정
    this.setState({ movies, isLoading: false });
  };

  // 컴포넌트가 마운트되면 getMovies 함수를 호출
  componentDidMount() {
    this.getMovies();
  }

  // 컴포넌트를 렌더링하는 메소드
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          // 로딩 중일 때는 "Loading..." 텍스트를 표시
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          // 로딩이 완료되면 영화 데이터를 render함
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

// Home 컴포넌트를 export하여 다른 파일에서 import하여 사용할 수 있게 함
export default Home;
