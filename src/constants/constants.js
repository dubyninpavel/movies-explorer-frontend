const countMoviesForDeskTop = 16;
const countMoviesForTablet = 8;
const countMoviesForMobile = 5;

const paginationForDeskTop = 4;
const paginationForTablet = 2;
const paginationForMobile = 2;

const BASE_URL_BEATFILM = 'https://api.nomoreparties.co/beatfilm-movies';
const BASE_URL = 'https://api.project.movies.search.nomoredomains.icu';
const resultNotFoundMessage = 'К сожалению, по вашему запросу ничего не найдено ...';
const errMessageFilter = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
const promiseRejectMessage = 'Возникла ошибка';
const validationMessageTextFormat = 'Имя должно содержать только латиницу, кириллицу, пробел или дефис';

export {
  countMoviesForDeskTop,
  countMoviesForTablet,
  countMoviesForMobile,
  paginationForDeskTop,
  paginationForTablet,
  paginationForMobile,
  BASE_URL_BEATFILM,
  BASE_URL,
  resultNotFoundMessage,
  errMessageFilter,
  promiseRejectMessage,
  validationMessageTextFormat,
};
