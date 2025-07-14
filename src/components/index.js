import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import ToggleColorMode from "./utils/ToggleColorMode";
import App from "./components/App";
import "./index.css";
import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_KEY; // ✅ TMDB key

// 🔍 Search Movies by keyword
export const fetchMovies = async (search, page = 1) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}&page=${page}`
  );
  return data;
};

// 🎬 Get Movie by ID
export const fetchMovieById = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  return data;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ToggleColorMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToggleColorMode>
  </Provider>
);
