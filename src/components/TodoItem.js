import { useState } from 'react';

const TodoItem = ({
  id,
  todo,
  isCompleted,
  handleModifyTodo,
  handleDelete,
}) => {
  const [todoData, setTodoData] = useState({ todo, isCompleted });
  const [mode, setMode] = useState(false);

  const handleModifyData = (e) => {
    setTodoData((prev) => {
      return { ...prev, todo: e.target.value };
    });
  };

  const handleChangeMode = () => {
    setMode(!mode);
    setTodoData((prev) => {
      return { ...prev, todo };
    });
  };

  return (
    <div>
      <span> {isCompleted ? 'true' : 'false'}</span>
      {mode ? (
        <>
          <input onChange={handleModifyData} value={todoData.todo}></input>
          <button
            onClick={() => {
              handleModifyTodo(id, todoData);
              handleChangeMode();
            }}
          >
            확인
          </button>
          <button onClick={handleChangeMode}>취소</button>
        </>
      ) : (
        <>
          <span>{todo} </span>
          <button onClick={handleChangeMode}>수정</button>
        </>
      )}
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        삭제
      </button>
    </div>
  );
};

export default TodoItem;
