import styled from 'styled-components';

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;
  font-weight: bold;
  font-size: 30px;
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    font-size: 16px;
    color: #7159c1;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    text-align: center;
    color: #666;
    line-height: 1.4;
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
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50px;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }
        span {
          background: #eee;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;

export const IssuesFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  button {
    border: 0;
    border-radius: 4px;
    outline: 0;
    margin: 0 10px;
    font-size: 16px;
    background: #7159c1;
    color: #fff;
    font-weight: bold;
    padding: 4px;

    &:hover {
      background: #4b0082;
    }

    &:nth-child(${props => props.active + 1}) {
      background: #4b0082;
      color: #fff;
    }
  }
`;

export const IssuePage = styled.div.attrs(props => ({
  disabled: props.page,
}))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin: 15px auto 0 auto;

  button {
    border: 0;
    border-radius: 4px;
    outline: 0;
    font-size: 15px;
    font-weight: bold;
    background: #7159c1;
    color: #fff;
    padding: 3px;

    &[disabled] {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  p {
    font-size: 16px;
    font-weight: bold;
  }
`;
