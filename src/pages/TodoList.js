import { useEffect, useState } from 'react';
import { getTodoList, postTodo, putTodo, deleteTodo } from '../lib/axios';
import TodoItem from '../components/TodoItem';
import { useNavigate } from 'react-router-dom';
import {
  TodoListContainer,
  TodoCommonInput,
  TodoButton,
  TodoFormContainer,
} from '../components/CommonTodo';

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoAddData, setAddTodoData] = useState('');
  const navigate = useNavigate();

  const handleTododata = (e) => {
    setAddTodoData(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const res = await postTodo(todoAddData);
      setTodoList((prev) => [...prev, res]);
      setAddTodoData('');
    } catch (e) {
      if (e.response.status) alert('내용을 입력해주세요.');
      else {
        alert('권한이 없습니다.');
        navigate('/');
      }
    }
  };

  const handleModifyTodo = async (id, data) => {
    try {
      await putTodo(id, data);
      setTodoList((prev) =>
        prev.map((e) => {
          if (e.id === id) {
            e.todo = data.todo;
            e.isCompleted = data.isCompleted;
          }
          return e;
        })
      );
    } catch (e) {
      if (e.response.status) alert('내용을 입력해주세요.');
      else {
        alert('권한이 없습니다.');
        navigate('/');
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      setTodoList((prev) =>
        prev.filter((e) => {
          return !(e.id === id);
        })
      );
    } catch (e) {
      alert('권한이 없습니다.');
      navigate('/');
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await getTodoList();
        setTodoList(res);
      } catch (e) {
        navigate('/');
      }
    })();
  }, []);

  return (
    <TodoListContainer>
      <div>
        <h1>
          wanted
          <br />
          pre onboarding
          <br />
          frontend
        </h1>
        <TodoFormContainer>
          <TodoCommonInput onChange={handleTododata} value={todoAddData} />
          <TodoButton onClick={handleSubmit}>추가</TodoButton>
        </TodoFormContainer>
        <div>
          {todoList.map((e) => (
            <TodoItem
              key={e.id}
              id={e.id}
              todo={e.todo}
              isCompleted={e.isCompleted}
              handleModifyTodo={handleModifyTodo}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </TodoListContainer>
  );
};

export default TodoList;
