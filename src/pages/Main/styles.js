import styled, { keyframes, css } from 'styled-components';

export const Title = styled.h1`
  color: #fff;
`;

export const Container = styled.div`
  max-width: 700px;
  margin: 50px auto;
  background: #fff;
  padding: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }

  svg {
    margin-right: 10px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;

  input {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 15px;
    height: 50px;
    border: 1px solid #ccc;
    font-size: 18px;
    border-radius: 4px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotare(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => {
  const data = {
    type: 'submit',
    disabled: props.loading,
  };

  if (!props.loading) delete data.disabled;

  return data;
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: none;
  background: #7159c1;
  color: #fff;
  font-size: 18px;
  border-radius: 4px;
  margin-left: 10px;

  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  svg {
    margin: auto;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  margin-top: 30px;
  list-style: none;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  li + li {
    border-top: 1px solid #eee;
  }

  a {
    color: #7150c1;
    text-decoration: none;
  }
`;
