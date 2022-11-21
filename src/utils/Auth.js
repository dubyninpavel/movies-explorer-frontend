/* eslint-disable prefer-promise-reject-errors */

import { BASE_URL } from '../constants/constants';

export function register({ name, email, password }) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      password,
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

export function authorize({ email, password }) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password,
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
