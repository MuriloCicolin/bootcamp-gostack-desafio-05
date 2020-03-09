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
