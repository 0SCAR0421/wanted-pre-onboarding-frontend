import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sign from './pages/Sign/Sign';
import Error from './pages/Error';
import TodoList from './pages/TodoList';

const App = () => {
  useEffect(() => {
    localStorage.getItem('key');
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
