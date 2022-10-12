import axios from 'axios';
const url = process.env.REACT_APP_API_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
  'access_token'
)}`;

export const postSignup = async (data) => {
  const res = await axios.post(`${url}/auth/signup`, {
    email: data.email,
    password: data.password,
  });

  return res.data;
};

export const postSignin = async (data) => {
  const res = await axios.post(`${url}/auth/signin`, {
    email: data.email,
    password: data.password,
  });

  return res.data;
};

export const postTodo = async (data) => {
  const res = await axios.post(`${url}/todos`, {
    todo: data,
  });

  return res.data;
};

export const getTodoList = async () => {
  const res = await axios.get(`${url}/todos`);

  return res.data;
};

export const putTodo = async (id, data) => {
  const res = await axios.put(`${url}/todos/${id}`, {
    todo: data.todo,
    isCompleted: data.isCompleted,
  });

  return res.data;
};

export const deleteTodo = async (id) => {
  const res = await axios.delete(`${url}/todos/${id}`);

  return res.data;
};
