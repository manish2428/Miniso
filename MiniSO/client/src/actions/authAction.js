import axios from 'axios';
import { SET_CURRENT_USER } from './types';
import { useDispatch } from 'react-redux';

export const register = async ({ email, password, name, phone }) => {
  // console.log({ email, password, name, phone });
  return await axios
    .post('/user/register', { email, password, name, phone })
    .then((res) => {
      return res;
    })
    .catch((err) => err.response);
};

export const login = async ({ email, password }) => {
  // console.log({ email, password, name, phone });
  return await axios
    .post('/user/login', { email, password })
    .then((res) => {
      // console.log(res);
      return res;
    })
    .catch((err) => err.response);
};

export const logout = async () => {
  // console.log({ email, password, name, phone });
  return await axios
    .post('/user/logout')
    .then((res) => {
      // console.log(res);
      return res;
    })
    .catch((err) => err.response);
};
