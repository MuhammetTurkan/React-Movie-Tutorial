import React, { useState } from "react";

import MovieCard from "../components/MovieCard";

const movies = [
  {
    id: 1,
    title: "John Wick",
    release_date: "2020",
    url: "https://placehold.co/300x200/b1b1b1/ffffff.png",
  },
  {
    id: 2,
    title: "Terminator",
    release_date: "1999",
    url: "https://placehold.co/300x200/b1b1b1/ffffff.png",
  },
  {
    id: 3,
    title: "The Matrix",
    release_date: "1998",
    url: "https://placehold.co/300x200/b1b1b1/ffffff.png",
  },
];

const Home = () => {
  const [query, setQuery] = useState();
  const handleSearch = (e) => {
    e.preventDefault();
    alert(query);
    setQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          name=""
          placeholder="Search for movies"
          id=""
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
