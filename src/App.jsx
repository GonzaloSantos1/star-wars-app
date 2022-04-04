import {useEffect, useState} from 'react';
import './App.scss';
import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom';
//import HomePage from "./pages/HomePage/HomePage.jsx";
import {LoginPage} from './pages/LoginPage/LoginPage';
import {RegisterPage} from './pages/RegisterPage/RegisterPage';
import {Homepage} from './pages/Homepage/Homepage';
import {MoviesPage} from './pages/MoviesPage/MoviesPage';
import {RequireAuth} from './shared/components/RequireAuth/RequireAuth';
import {JwtContext} from './shared/context/JwtContext';
import {ButtonLogout} from './shared/components/ButtonLogout/ButtonLogout';
import axios from 'axios';
import {CharactersPage} from './pages/CharactersPage/CharactersPage';

function App() {
  const [characters, setCharacters] = useState([]);
  const [movies, setMovies] = useState([]);
  const url = 'https://starwars-server.vercel.app';

  const moviesURL = url + '/movies';
  const charactersURL = url + '/characters';

  const getCharacters = (charactersURL) => {
    axios.get(charactersURL).then((response) => {
      setCharacters(response.data.data.characters);
    });
  };

  const getMovies = (moviesURL) => {
    axios.get(moviesURL).then((response) => {
      setMovies(response.data.data.movies);
    });
  };

  useEffect(() => {
    getCharacters(charactersURL);
    getMovies(moviesURL);
  }, []);

  const [jwt, setJwt] = useState(localStorage.getItem('token'));
  return (
    <JwtContext.Provider value={{jwt, setJwt}}>
      <div className='App'>
        <Router>
          {jwt && (
            <nav>
              <div className='navbar'>
                {/* <NavLink to='' activeclassname={'active'} className='nav-button'>
                  Home
                </NavLink> */}
                <NavLink to='characters' activeclassname={'active'} className='nav-button'>
                  Characters
                </NavLink>
                <NavLink to='movies' activeclassname={'active'} className='nav-button'>
                  Movies
                </NavLink>
              </div>
              <div className='logout-button'>
                <ButtonLogout />
              </div>
            </nav>
          )}

          <Routes>
            {/* <Route
              path='/'
              element={
                <RequireAuth>
                  <Homepage />
                </RequireAuth>
              }
            /> */}
            <Route
              path='/characters'
              element={
                <RequireAuth>
                  <CharactersPage characters={characters} />
                </RequireAuth>
              }
            />
            <Route
              path='/movies'
              element={
                <RequireAuth>
                  <MoviesPage movies={movies} />
                </RequireAuth>
              }
            />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
          </Routes>
        </Router>
      </div>
    </JwtContext.Provider>
  );
}

export default App;
