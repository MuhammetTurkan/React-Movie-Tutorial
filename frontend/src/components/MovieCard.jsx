import React from "react";
import "../css/MovieCard.css";
import { useMovieContext } from "../context/MovieContext";
import { GoHeartFill } from "react-icons/go";

const MovieCard = ({ movie }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);
  const onFavoriteClick = (e) => {
    e.preventDefault();

    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            <GoHeartFill />
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
