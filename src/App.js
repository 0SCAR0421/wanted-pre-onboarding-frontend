import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Sign from './pages/Sign/Sign';
import Error from './pages/Error';
import TodoList from './pages/TodoList';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) navigate('/todo');
    else navigate('/');
  }, []);

  return (
    <Routes>
      <Route path="*" element={<Error />}></Route>
      <Route path="/" element={<Sign />}></Route>
      <Route path="/todo" element={<TodoList />}></Route>
    </Routes>
  );
};

export default App;
