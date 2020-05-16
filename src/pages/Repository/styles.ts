import styled from 'styled-components';
import { lighten } from 'polished';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-self: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.3s;

    &:hover {
      color: #ffd700;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      display: flex;
      flex-direction: column;
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #ffd700;
      }

      span {
        font-size: 20px;
        color: #f0f0f5;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    justify-content: center;
    margin-top: 40px;

    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      border: 1px solid #085f8e;
      border-radius: 3px;
      font-size: 22px;

      & + li {
        margin-left: 80px;
      }

      span {
        display: flex;
        align-items: center;
        color: #f0f0f5;
        padding: 10px;
        background: #115173;
        border-right: 1px solid #085f8e;
        svg {
          margin-right: 4px;
        }
      }

      strong {
        display: block;
        color: #085f8e;
        padding: 10px;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    display: flex;
    align-items: center;
    background: #053f5e;
    width: 100%;
    padding: 24px 20px;
    text-decoration: none;
    border-radius: 4px;
    transition-duration: 0.5s;

    &:hover {
      transform: translateX(10px);
      background: ${lighten(0.1, '#053f5e')};
    }

    & + a {
      margin-top: 10px;
    }
  }

  div {
    margin-left: 16px;
    display: flex;
    flex: 1;
    flex-direction: column;

    strong {
      font-size: 20px;
      color: #ffd700;
    }

    span {
      font-size: 16px;
      font-weight: 300;
      color: #f0f0f5;
    }
  }

  svg {
    margin-left: auto;
    color: #cbcbd6;
  }
`;
