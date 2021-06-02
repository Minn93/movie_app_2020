import React from "react";
import PropTypes from "prop-types";

function Movie({id, year, title, summary, poster}){
    return <h4>{title}</h4>
}

Movie.propTypes = { //api 사이트에서 필요한 정보를 입력, 이름을 임의로 바꿔도된다.
    id: PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired
}

export default Movie;