import { useState } from 'react';
import styled from 'styled-components';
import { TodoButton } from '../components/CommonTodo';
import { CommonInput } from './Common';

const TodoItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space2);
  color: var(--text3);
`;

const TodoItemContentBox = styled.div`
  > p {
    display: flex;
    align-items: center;
    padding: calc(var(--space3) / 2);
    width: 300px;
    height: 40px;
    word-break: break-all;
  }
`;

const TodoItemInput = styled(CommonInput)`
  margin-top: 0;
  width: 300px;
  padding: calc(var(--space3) / 2);
  font-size: var(--font-size1);
`;

const TodoItemButtonBox = styled.div``;

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
    <TodoItemContainer>
      {mode ? (
        <>
          <TodoItemContentBox>
            <TodoItemInput
              onChange={handleModifyData}
              value={todoData.todo}
            ></TodoItemInput>
          </TodoItemContentBox>
          <TodoItemButtonBox>
            <span> {isCompleted ? 'true' : 'false'}</span>
            <TodoButton
              onClick={() => {
                handleModifyTodo(id, todoData);
                handleChangeMode();
              }}
            >
              확인
            </TodoButton>
            <TodoButton onClick={handleChangeMode}>취소</TodoButton>
          </TodoItemButtonBox>
        </>
      ) : (
        <>
          <TodoItemContentBox>
            <p>{todo} </p>
          </TodoItemContentBox>
          <TodoItemButtonBox>
            <span> {isCompleted ? 'true' : 'false'}</span>
            <TodoButton onClick={handleChangeMode}>수정</TodoButton>
            <TodoButton
              onClick={() => {
                handleDelete(id);
              }}
            >
              삭제
            </TodoButton>
          </TodoItemButtonBox>
        </>
      )}
    </TodoItemContainer>
  );
};

export default TodoItem;
