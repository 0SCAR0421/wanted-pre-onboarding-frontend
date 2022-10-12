import styled from 'styled-components';
import { CommonInput, CommonContainer } from './Common';

export const SignContainer = styled(CommonContainer)`
  > div:last-child {
    font-size: var(--font-size2);
    color: var(--text4);

    & > div:last-child {
      display: flex;
      justify-content: center;

      & > button {
        border: none;
        background: none;
        margin-left: var(--space3);
        color: var(--text2);
        cursor: pointer;

        &:hover {
          color: var(--text4);
        }
      }
    }
  }
`;

export const SignFormContainer = styled.div`
  > div {
    margin-bottom: var(--space1);

    & > label {
      color: var(--text4);
      font-size: var(--font-size2);
    }
  }
`;

export const SignCommonInput = styled(CommonInput)``;

export const SubmitButton = styled.button`
  margin-top: calc(var(--space1) - (var(--space3) / 2));
  margin-bottom: calc(var(--space2) - (var(--space3) / 2));
  width: 300px;
  height: 40px;
  border-radius: var(--border-radius2);
  border: none;
  box-shadow: var(--shadow1);
  background: #fff;

  &:hover {
    background: rgba(188, 188, 188, 0.3);
    cursor: ${(props) => (props.state ? 'pointer' : 'not-allowed')};
  }
`;
