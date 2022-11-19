/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import {
  Navigate, Route, Routes, useNavigate,
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
import CurrentUserContext from '../../contexts/CurrentUserContext';
import HadlerMessageValidation from '../../utils/hadlerMessageValidation';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as Auth from '../../utils/Auth';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [downloadBeatFilmApi, setDownloadBeatFilmApi] = useState(JSON.parse(localStorage.getItem('downloadBeatFilmApi')) || []);
  const [arrMovies, setArrMovies] = useState([]);
  const [arrSavedMovies, setArrSavedMovies] = useState([]);
  const [isOpenModalWindow, setIsOpenModalWindow] = useState(false);
  const [textErrForModalWindow, setTextErrForModalWindow] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem('token') !== null);
  const [isActiveElseButton, setIsActiveElseButton] = useState(false);
  const [isOpenMessageWindow, setOpenMessageWindow] = useState(false);
  const navigate = useNavigate();
  console.log(isLoggedIn);
  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      myMovies.tokenCheck()
        .then(() => {
          setLoggedIn(true);
        })
        .catch((err) => {
          setLoggedIn(false);
          localStorage.clear();
          console.log(err);
        });
    }
  }, [localStorage.getItem('token')]);

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
      if (!JSON.parse(localStorage.getItem('downloadBeatFilmApi'))) {
        beatfilmMovies.getMovies()
          .then((movies) => {
            localStorage.setItem('downloadBeatFilmApi', JSON.stringify(movies));
            setDownloadBeatFilmApi(movies);
          })
          .catch(() => {
            setTextErrForModalWindow(errMessageFilter);
            setIsOpenModalWindow(true);
          });
      }
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const newArr = downloadBeatFilmApi.map((card) => {
      let statusLike = false;
      let id = '';
      const arrFilter = arrSavedMovies.filter((savedMovies) => savedMovies.movieId === card.id);
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
  }, [downloadBeatFilmApi, arrSavedMovies]);

  function toggleModalWindow() {
    setIsOpenModalWindow(!isOpenModalWindow);
  }

  function showElseButton(isShow) {
    setIsActiveElseButton(isShow);
  }

  function handleLogin(valueInput, setIsLoading, setIsErrMessage, setErrAuth) {
    Auth.authorize(valueInput)
      .then((res) => {
        if (res.data) {
          localStorage.setItem('token', res.token);
          setLoggedIn(true);
          navigate('/movies');
        }
      })
      .catch((err) => {
        const error = HadlerMessageValidation(err);
        setIsErrMessage(error.errMessage);
        setErrAuth(error.bool);
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }

  function handleRegister(valueInput, setIsLoading, setIsErrMessage, setErrAuth) {
    Auth.register(valueInput)
      .then((res) => {
        if (res.data) {
          handleLogin(valueInput, setIsLoading, setIsErrMessage, setErrAuth);
        }
      })
      .catch((err) => {
        const error = HadlerMessageValidation(err);
        setIsErrMessage(error.errMessage);
        setErrAuth(error.bool);
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }

  function closeMessageWindow() {
    setOpenMessageWindow(false);
  }

  function changeInfoProfile(valueInput, setIsLoading, setIsErrMessage, setErrAuth) {
    myMovies.changeDataUser(valueInput)
      .then((newDataUser) => {
        if (newDataUser.data) {
          setOpenMessageWindow(true);
          setTimeout(closeMessageWindow, 5000);
          setCurrentUser(newDataUser.data);
        }
      })
      .catch((err) => {
        const error = HadlerMessageValidation(err);
        setIsErrMessage(error.errMessage);
        setErrAuth(error.bool);
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }

  function setLikeMovies(setLike, movie) {
    myMovies.addSavedCard(movie)
      .then((addNewMovies) => {
        setLike(true);
        setArrSavedMovies([addNewMovies.data, ...arrSavedMovies]);
      })
      .catch((err) => console.log(err));
  }

  function deleteLikeMovies(setLike, movieId) {
    myMovies.deleteSavedMovies(movieId)
      .then((removedMovie) => {
        setLike(false);
        setArrSavedMovies((state) => state.filter((card) => card._id !== removedMovie.item._id));
      })
      .catch((err) => console.log(err));
  }

  function deleteMovie(movieId) {
    myMovies.deleteSavedMovies(movieId)
      .then((removedMovie) => {
        setArrSavedMovies((state) => state.filter((card) => card._id !== removedMovie.item._id));
      })
      .catch((err) => console.log(err));
  }

  function signOut() {
    setLoggedIn(false);
    navigate('/');
    localStorage.clear();
    setCurrentUser({});
  }

  return (
    <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path = '/signup'
            element = {
              <ProtectedRoute
                isLoggedIn = {!isLoggedIn}
                navigateTo = "/movies"
              >
                <HeaderAuth />
                <Register
                  onRegister = {handleRegister}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path = '/signin'
            element = {
              <ProtectedRoute
                isLoggedIn = {!isLoggedIn}
                navigateTo = "/movies"
              >
                <HeaderAuth />
                <Login
                  onLogin = {handleLogin}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path = '/'
            exact
            element = {
              <Main
                isLoggedIn = {isLoggedIn}
              />
            }
          />
          <Route
            path = '/movies'
            element = {
              <ProtectedRoute
                isLoggedIn = {isLoggedIn}
                navigateTo = "/"
              >
                <Header />
                <Movies
                  arrMovies = {arrMovies}
                  showElseButton = {showElseButton}
                  isActiveElseButton = {isActiveElseButton}
                  setLikeMovies = {setLikeMovies}
                  deleteLikeMovies = {deleteLikeMovies}
                />
                <Footer />
              </ProtectedRoute>
            }
          />
          <Route
            path = '/saved-movies'
            element = {
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                navigateTo = "/"
              >
                <Header />
                <SavedMovies
                  arrSavedMovies = {arrSavedMovies}
                  showElseButton = {showElseButton}
                  deleteMovie = {deleteMovie}
                />
                <Footer />
              </ProtectedRoute>
            }
          />
          <Route
            path = '/profile'
            element = {
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                navigateTo = "/"
              >
                <Header />
                <Profile
                  onSubmit = {changeInfoProfile}
                  goOut ={signOut}
                  isOpenMessageWindow = {isOpenMessageWindow}
                  onClickBtnClose = {closeMessageWindow}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path = "*"
            element = {
              <PageNotFound />
            }
          />
        </Routes>
        <ModalWindow
          isOpen = {isOpenModalWindow}
          toggleModalWindow = {toggleModalWindow}
          textErrForModalWindow = {textErrForModalWindow}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
