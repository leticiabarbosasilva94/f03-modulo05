import styled from 'styled-components';

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

export const SubmitButton = styled.button.attrs({
  type: 'submit',
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

  svg {
    margin: auto;
  }
`;
