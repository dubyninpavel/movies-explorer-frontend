/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable class-methods-use-this */

import { BASE_URL, defaultError } from '../constants/constants';

class MoviesApi {
  constructor(url) {
    this.url = url;
  }

  _getPromiseResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(defaultError);
  }

  _getToken() {
    return `Bearer ${localStorage.getItem('token')}`;
  }

  getDataUser() {
    return fetch(`${this.url}/users/me`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        authorization: this._getToken(),
      },
    })
      .then((res) => this._getPromiseResult(res));
  }

  changeDataUser({ name, email }) {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        authorization: this._getToken(),
      },
      body: JSON.stringify({
        name,
        email,
      }),
    })
      .then(async (res) => {
        if (res.ok) {
          return res.json();
        }
        const resJson = await res.json();
        return Promise.reject(resJson);
      });
  }

  addSavedCard(data) {
    return fetch(`${this.url}/movies`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        authorization: this._getToken(),
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailerLink: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co${data.image.url}`,
        movieId: data.movieId,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    })
      .then((res) => this._getPromiseResult(res));
  }

  getSavedMovies() {
    return fetch(`${this.url}/movies`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        authorization: this._getToken(),
      },
    })
      .then((res) => this._getPromiseResult(res));
  }

  deleteSavedMovies(movieId) {
    return fetch(`${this.url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        authorization: this._getToken(),
      },
    })
      .then((res) => this._getPromiseResult(res));
  }

  tokenCheck() {
    return fetch(`${this.url}/users/me`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        authorization: this._getToken(),
      },
    })
      .then(async (res) => {
        if (res.ok) {
          return res.json();
        }
        const resJson = await res.json();
        return Promise.reject(resJson);
      });
  }
}

const myMovies = new MoviesApi(BASE_URL);

export default myMovies;
