import React, { useState } from "react";

const MovieContext = React.createContext({
  movieList: [],
  addMovies: (movies) => {},
});

export const MovieContextProvider = (props) => {
  const [movies, setMovies] = useState([]);

  const addMoviesHandler = (movies) => {
    setMovies(movies);
  };

  const contextValue = {
    movieList: movies,
    addMovies: addMoviesHandler,
  };

  return (
    <MovieContext.Provider value={contextValue}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
