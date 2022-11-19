const countMoviesForDeskTop = 16;
const countMoviesForTablet = 8;
const countMoviesForMobile = 5;

const paginationForDeskTop = 4;
const paginationForTablet = 2;
const paginationForMobile = 2;

const bigWidthWindow = 990;
const mediumWidthWindow = 620;

const durationShortMovie = 40;

const BASE_URL_BEATFILM = 'https://api.nomoreparties.co/beatfilm-movies';
const BASE_URL = 'https://api.project.movies.search.nomoredomains.icu';
const susuccessfulUpdateDataUser = 'Ваши данные успешно изменены';
const resultNotFoundMessage = 'К сожалению, по вашему запросу ничего не найдено ...';
const errMessageFilter = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
const promiseRejectMessage = 'Возникла ошибка';
const validationMessageTextFormatName = 'Имя должно содержать только латиницу, кириллицу, пробел или дефис';
const validationMessageTextFormatEmail = 'Email должен содержать корректный адрес';
const defaultError = 'Возникла ошибка';

export {
  countMoviesForDeskTop,
  countMoviesForTablet,
  countMoviesForMobile,
  paginationForDeskTop,
  paginationForTablet,
  paginationForMobile,
  bigWidthWindow,
  mediumWidthWindow,
  durationShortMovie,
  BASE_URL_BEATFILM,
  BASE_URL,
  susuccessfulUpdateDataUser,
  resultNotFoundMessage,
  errMessageFilter,
  promiseRejectMessage,
  validationMessageTextFormatName,
  validationMessageTextFormatEmail,
  defaultError,
};
