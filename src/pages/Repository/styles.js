import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    margin: 0;
    margin-top: 10px;
    font-size: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  p {
    margin-top: 5px;
    line-height: 1.4;
    font-size: 14px;
    color: #666;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid #eee;
    padding: 20px;
  }

  li + li {
    margin-top: 10px;
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #eee;
  }

  div {
    flex: 1;
    margin-left: 15px;

    strong {
      font-size: 16px;

      a {
        text-decoration: none;
        color: black;

        &:hover {
          color: #7159c1;
        }
      }

      span {
        background: #eee;
        color: #333;
        border-radius: 3px;
        font-size: 12px;
        font-weight: 400;
        padding: 2px 4px;
        margin-left: 10px;
      }
    }

    p {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }
`;

export const IssueState = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  button {
    cursor: pointer;
    color: #7159c1;
    background: none;
    border: none;
  }
`;

export const Pagination = styled.section`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;

  button {
    background: #7159c1;
    color: #fff;
    padding: 5px 10px;
    border: none;
    font-weight: bold;
    display: flex;
    align-items: center;

    svg {
      margin: 0 5px;
    }

    &.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;
