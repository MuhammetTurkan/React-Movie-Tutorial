import React from "react";
import "../css/Favorite.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

const Favorite = () => {
  const { favorites } = useMovieContext();

  return (
    <>
      {favorites.length > 0 ? (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <div className="favorites-empty">
          <h2>No Favorites Movies Yet</h2>
          <p>Start adding movies to our favorites and they will appear heer!</p>
        </div>
      )}
    </>
  );
};

export default Favorite;
