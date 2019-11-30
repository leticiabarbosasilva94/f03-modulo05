import styled from 'styled-components';

const Container = styled.div`
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

export default Container;
