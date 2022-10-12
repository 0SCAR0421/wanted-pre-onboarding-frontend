import styled from 'styled-components';

export const SubmitButton = styled.button`
  background-color: ${(props) => (props.state ? 'black' : 'tomato')};
`;
