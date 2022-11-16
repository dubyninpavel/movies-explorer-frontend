/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable array-callback-return */
/* eslint-disable prefer-const */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

import {
  Route, Switch, useHistory, Redirect,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import beatfilmMovies from '../../utils/BeatFilmApi';
import myMovies from '../../utils/MoviesApi';
import ModalWindow from '../ModalWindow/ModalWindow';
import { errMessageFilter } from '../../constants/constants';
import CurrentUserContext from '../contexts/CurrentUserContext';
import HadlerMessageValidation from '../../utils/hadlerMessageValidation';
import * as Auth from '../../utils/Auth';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [downloadMoviesApi, setDownloadMoviesApi] = useState([]);
  const [arrMovies, setArrMovies] = useState([]);
  const [arrSavedMovies, setArrSavedMovies] = useState([]);
  const [isOpenModalWindow, setIsOpenModalWindow] = useState(false);
  const [textErrForModalWindow, setTextErrForModalWindow] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isActiveElseButton, setIsActiveElseButton] = useState(false);

  const [statusLike, setStatusLike] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) {
      myMovies.getDataUser()
        .then((dataUser) => {
          setCurrentUser(dataUser);
        })
        .catch((err) => {
          console.log('err', err);
        });
      myMovies.getSavedMovies()
        .then((dataSavedMovies) => {
          setArrSavedMovies(dataSavedMovies.data);
        })
        .catch((err) => {
          console.log('err', err);
        });
      beatfilmMovies.getMovies()
        .then((movies) => {
          setDownloadMoviesApi(movies);
        })
        .catch(() => {
          setTextErrForModalWindow(errMessageFilter);
          setIsOpenModalWindow(true);
        });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const newArr = downloadMoviesApi.map((card) => {
      let statusLike = false;
      let id = '';
      let arrFilter = arrSavedMovies.filter((savedMovies) => savedMovies.movieId === card.id);
      if (arrFilter.length > 0) {
        statusLike = true;
        id = arrFilter[0]._id;
      }
      return {
        ...card,
        like: statusLike,
        _id: id,
        movieId: card.id,
      };
    });
    localStorage.setItem('arrMoviesApi', JSON.stringify(newArr));
    setArrMovies(JSON.parse(localStorage.getItem('arrMoviesApi')));
  }, [downloadMoviesApi, arrSavedMovies]);

  function toggleModalWindow() {
    setIsOpenModalWindow(!isOpenModalWindow);
  }

  function showElseButton(isShow) {
    setIsActiveElseButton(isShow);
  }

  function handleLogin(valueInput, setIsLoading, setIsErrMessage, setErrAuth) {
    Auth.authorize(valueInput)
      .then((res) => {
        const error = HadlerMessageValidation(res);
        setIsErrMessage(error.errMessage);
        setErrAuth(error.bool);
        if (res.data) {
          localStorage.setItem('token', res.token);
          setLoggedIn(true);
          history.push('/movies');
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  function handleRegister(valueInput, setIsLoading, setIsErrMessage, setErrAuth) {
    Auth.register(valueInput)
      .then((res) => {
        const error = HadlerMessageValidation(res);
        setIsErrMessage(error.errMessage);
        setErrAuth(error.bool);
        if (res.data) {
          handleLogin(valueInput, setIsLoading, setIsErrMessage, setErrAuth);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  function changeInfoProfile(valueInput, setIsLoading, setIsErrMessage, setErrAuth) {
    myMovies.changeDataUser(valueInput)
      .then((newDataUser) => {
        const error = HadlerMessageValidation(newDataUser);
        setIsErrMessage(error.errMessage);
        setErrAuth(error.bool);
        if (newDataUser.data) {
          setCurrentUser(newDataUser.data);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  function setLikeMovies(setLike, movies, setMovies, setMovieId) {
    myMovies.addSavedCard(movies)
      .then((addNewMovies) => {
        console.log(addNewMovies.data.nameRU, addNewMovies.data._id);
        setLike(true);
        setArrSavedMovies([addNewMovies.data, ...arrSavedMovies]);
        setMovies(addNewMovies.data);
        setMovieId(addNewMovies.data._id);
      })
      .catch((err) => console.log(err));
  }

  function deleteLikeCard(setLike, movieId, setMovieId) {
    myMovies.deleteSavedMovies(movieId)
      .then((removedMovie) => {
        console.log(removedMovie);
        const removedMovieId = removedMovie.item._id;
        console.log(removedMovie.item.nameRU, removedMovieId);
        setLike(false);
        setMovieId('');
        setArrSavedMovies((state) => state.filter((card) => card._id !== removedMovie.item._id));
      })
      .catch((err) => console.log(err));
  }

  function deleteCard(movieId) {
    myMovies.deleteSavedMovies(movieId)
      .then((removedMovie) => {
        console.log(removedMovie);
        setArrSavedMovies((state) => state.filter((card) => card._id !== removedMovie.item._id));
      })
      .catch((err) => console.log(err));
  }

  function signOut() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    history.push('/');
    localStorage.clear();
    setCurrentUser({});
  }

  return (
    <div className='page'>
      <Switch>
        <Route path='/signup'>
          <HeaderAuth />
          <Register
            onRegister = {handleRegister}
          />
        </Route>
        <Route path='/signin'>
          <HeaderAuth />
          <Login
            onLogin = {handleLogin}
          />
        </Route>
        <CurrentUserContext.Provider value={currentUser}>
          <Route exact path='/'>
            <Main />
          </Route>
          {isLoggedIn ? <Redirect to="/movies" /> : <Redirect to="/" />}
          <Route path='/movies'>
            <Header />
            <Movies
              arrMovies = {arrMovies}
              isSavedMoviesPages = {false}
              showElseButton = {showElseButton}
              isActiveElseButton = {isActiveElseButton}
              setLikeMovies = {setLikeMovies}
              deleteLikeCard = {deleteLikeCard}
            />
            <Footer />
          </Route>
          <Route path='/saved-movies'>
            <Header />
            <SavedMovies
              arrSavedMovies = {arrSavedMovies}
              showElseButton = {showElseButton}
              deleteLikeCard = {deleteLikeCard}
              deleteCard = {deleteCard}
            />
            <Footer />
          </Route>
          <Route path='/profile'>
            <Header />
            <Profile
              onSubmit = {changeInfoProfile}
              goOut ={signOut}
            />
          </Route>
        </CurrentUserContext.Provider>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <ModalWindow
        isOpen = {isOpenModalWindow}
        toggleModalWindow = {toggleModalWindow}
        textErrForModalWindow = {textErrForModalWindow}
      />
    </div>
  );
}

export default App;
