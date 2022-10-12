import { useEffect, useState } from 'react';
import { getTodoList, postTodo, putTodo, deleteTodo } from '../lib/axios';
import TodoItem from '../components/TodoItem';

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoAddData, setAddTodoData] = useState('');

  const handleTododata = (e) => {
    setAddTodoData(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const res = await postTodo(todoAddData);
      setTodoList((prev) => [...prev, res]);
      setAddTodoData('');
    } catch (e) {
      console.log(e);
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
      console.log(e);
    }
  };

  const handleDelete = async (id) => {
    try {
      deleteTodo(id);
      setTodoList((prev) =>
        prev.filter((e) => {
          return !(e.id === id);
        })
      );
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    (async () => {
      const res = await getTodoList();
      setTodoList(res);
    })();
  }, []);
  return (
    <div>
      <input onChange={handleTododata} value={todoAddData} />
      <button onClick={handleSubmit}>추가하기</button>
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
  );
};

export default TodoList;
