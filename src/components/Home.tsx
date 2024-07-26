import React, { useEffect, useState } from "react";
import {
  MOVIE_LIST_URL,
  MOVIE_SEARCH_URL,
} from "../constants/constant";
import Cards from "./card/Card";
import useDebounce from "../utils/customHooks/useDebounce";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [movieList, setMovieList] = useState([]);

  const debouncedInputValue = useDebounce(searchText, 1000);

  useEffect(() => {
    if (debouncedInputValue) {
      getSearchResults(debouncedInputValue);
    }
    {
      fetchMovies();
    }
  }, [debouncedInputValue]);

  const fetchMovies = () => {
    try {
      fetch(MOVIE_LIST_URL)
        .then((res) => res.json())
        .then((data) => {
          console.log("data", data.results);
          setMovieList(data?.results);
        });
    } catch (err) {
      console.log("err");
    }
  };

  const getSearchResults = (value: string | number) => {
    try {
      fetch(MOVIE_SEARCH_URL + value)
        .then((res) => res.json())
        .then((data) => {
          setMovieList(data?.results);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    setSearchText(value);
  };

  return (
    <div>
      <p>HotStar</p>
      <input onChange={handleInputChange}></input>
      <p>Trending Movies</p>
      <Cards list={movieList} />
    </div>
  );
};
export default Home;