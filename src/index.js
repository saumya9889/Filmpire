import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import ToggleColorMode from './utils/ToggleColorMode';
import App from './components/App';
import './index.css';
import axios from 'axios';

const API_KEY = 'YOUR_OMDB_API_KEY'; // put your key here

export const fetchMovies = async (search, page = 1) => {
  const { data } = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&page=${page}`);
  return data;
};

export const fetchMovieById = async (id) => {
  const { data } = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
  return data;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ToggleColorMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToggleColorMode>
  </Provider>,
);
