import axios from 'axios';
const url = process.env.REACT_APP_API_URL;

export const postSignup = async (data) => {
  try {
    const res = await axios.post(`${url}/auth/signup`, {
      email: data.email,
      password: data.password,
    });

    return res.data;
  } catch (e) {
    return e;
  }
};

export const postSignin = async (data) => {
  try {
    const res = await axios.post(`${url}/auth/signin`, {
      email: data.email,
      password: data.password,
    });

    return res.data;
  } catch (e) {
    return e;
  }
};
