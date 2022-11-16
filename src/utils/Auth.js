/* eslint-disable consistent-return */
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
    .then((res) => {
      try {
        return res.json();
      } catch (err) {
        return (err);
      }
    })
    .then((res) => res)
    .catch((err) => err);
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
    .then((res) => {
      try {
        return res.json();
      } catch (err) {
        return (err);
      }
    })
    .then((res) => res)
    .catch((err) => err);
}
