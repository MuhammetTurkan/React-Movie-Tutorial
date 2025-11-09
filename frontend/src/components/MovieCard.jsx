import React from "react";
import "../css/MovieCard.css";

const MovieCard = ({ movie }) => {
  const onFavoriteClick = () => {
    alert("clicked");
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            🤍
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>

        <p>{movie.release_date?.split("-")[0]}</p>
        <div className="vote-info">
          <p className="">★ {Math.round(movie.vote_average ?? 0)}/10</p>
          <p>{movie.vote_count} votes</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
