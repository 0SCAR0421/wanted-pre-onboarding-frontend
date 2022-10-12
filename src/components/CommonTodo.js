import styled from 'styled-components';
import { CommonContainer, CommonInput } from './Common';

export const TodoListContainer = styled(CommonContainer)`
  min-height: calc(100vh - var(--space1) * 4);
  margin-top: calc(var(--space1) * 2);
  margin-bottom: calc(var(--space1) * 2);
  align-items: flex-start;
`;

export const TodoFormContainer = styled.div`
  width: 450px;
  display: flex;
  margin-bottom: var(--space1);
`;

export const TodoCommonInput = styled(CommonInput)`
  margin-top: 0;
`;

export const TodoButton = styled.button`
  color: var(--text2);
  cursor: pointer;
  border: none;
  margin-left: var(--space3);
  background: none;
  box-shadow: var(--shadow1);
  padding: var(--space3);
  border-radius: var(--border-radius2);
`;
