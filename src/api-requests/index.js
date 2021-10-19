/* eslint-disable no-return-await */
import axios from 'axios';
import jwt from 'jwt-decode';

const URL = 'http://localhost:3000/api/v1';

export const signInUser = async (data) => await axios({
  url: `${URL}/signup`,
  data: JSON.stringify(data),
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((res) => res)
  .catch((err) => err.response);

export const saveToken = (data) => {
  const NOW = Date.now();
  const tokenObj = {
    token: data.data.auth_token,
    expiresAt: NOW + 86400000,
  };
  localStorage.setItem('isLoggedIn', true);
  localStorage.setItem('tokenObj', JSON.stringify(tokenObj));
  localStorage.setItem('userInfo', jwt(data.data.auth_token).name);
  localStorage.setItem(
    'userId',
    JSON.stringify(jwt(data.data.auth_token).user_id),
  );
};
