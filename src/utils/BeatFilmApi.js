/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-promise-reject-errors */

import { BASE_URL_BEATFILM } from '../constants/constants';

class BeatFilmApi {
  constructor(url) {
    this.url = url;
    this.headers = {
      'Content-type': 'application/json',
    };
  }

  _getPromiseResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject('Возникла ошибка');
  }

  getMovies() {
    return fetch(this.url, {
      method: 'GET',
      headers: this.headers,
    })
      .then((res) => this._getPromiseResult(res));
  }
}

const beatfilmMovies = new BeatFilmApi(BASE_URL_BEATFILM);

export default beatfilmMovies;
