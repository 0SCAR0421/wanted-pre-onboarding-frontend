import styled from 'styled-components';

export const CommonContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  > div:first-child {
    box-shadow: var(--shadow1);
    padding: var(--space1);
    border-radius: var(--border-radius1);

    & > h1 {
      margin-bottom: var(--space1);
    }
  }
`;

export const CommonInput = styled.input`
  display: block;
  width: 300px;
  height: 40px;
  border-radius: var(--border-radius2);
  border: none;
  box-shadow: var(--shadow1);
  margin-top: var(--space3);
  padding-left: var(--space3);
`;
