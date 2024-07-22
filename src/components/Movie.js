import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Movie 컴포넌트에 대한 CSS 스타일을 import
import "./Movie.css";

// Movie라는 이름의 함수형 컴포넌트를 정의
function Movie({ id, year, title, summary, poster, genres }) {
  // 컴포넌트가 렌더링할 JSX를 반환
  return (
    // Link 컴포넌트를 사용하여 클릭하면 해당 영화의 상세 페이지로 이동하는 링크를 생성
    <Link
      to={{
        pathname: `/movie/${id}`, // 이동할 경로를 지정
        state: {
          // 이동할 때 함께 전달할 상태를 지정
          year,
          title,
          summary,
          poster,
          genres,
        },
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </div>
    </Link>
  );
}

// propTypes를 사용하여 props의 타입을 검사
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// Movie 컴포넌트를 export하여 다른 파일에서 import하게 함
export default Movie;
