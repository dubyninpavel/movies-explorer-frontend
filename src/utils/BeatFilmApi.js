/* eslint-disable class-methods-use-this */

import { BASE_URL_BEATFILM, promiseRejectMessage } from '../constants/constants';

class BeatFilmApi {
  constructor(url) {
    this.url = url;
    this.headers = {
      'Content-type': 'application/json',
    };
  }

  getMovies() {
    return fetch(this.url, {
      method: 'GET',
      headers: this.headers,
    })
      .then((res) => this._getPromiseResult(res));
  }

  _getPromiseResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(promiseRejectMessage);
  }
}

const beatfilmMovies = new BeatFilmApi(BASE_URL_BEATFILM);

export default beatfilmMovies;
