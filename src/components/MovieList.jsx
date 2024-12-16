import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../movieSlice";

export const MovieList = () => {
  const movies = useSelector((state) => state.filmovi.movies);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeMovie(id));
  };
  return (
    <div>
      <h1>Movie List</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          {movie.name}{" "}
          <button onClick={() => handleDelete(movie.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
