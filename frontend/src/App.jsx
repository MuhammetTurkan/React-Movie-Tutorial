import "./App.css";
import MovieCard from "./components/MovieCard";

const movie = {
  title: "Tim's Film",
  release_date: "2025",
  url: "",
};

function App() {
  return (
    <>
      <MovieCard movie={movie} />
    </>
  );
}

export default App;
