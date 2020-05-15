import styled, {css} from 'styled-components';
import {shade} from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-top: 80px;
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    color: #3a3a3a;
    border-radius: 5px 0 0 5px;
    border: 2px solid #FFF;
    border-right: 0;

    ${(props) => props.hasError && css`
      border-color: #c53030;
    `}

    &::placeholder{
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #FFF;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover{
      background: ${shade(0.1, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a{
    display: flex;
    align-items: center;
    background: #FFF;
    width: 100%;
    padding: 24px 20px;
    text-decoration: none;
    transition: transform 0.2s;

    &:hover{
      transform: translateX(10px);
    }

    & + a {
      margin-bottom: 10px;
    }
  }

  img{
    width: 70px;
    height: 70px;
    border-radius: 50px;
  }

  div {
    margin-left: 16px;
    display: flex;
    flex: 1;
    flex-direction: column;

    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    span {
      font-size: 16px;
      font-weight: 300;
      color: #a8a8b3;
    }
  }

  svg {
    margin-left: auto;
    color: #cbcbd6;
  }
`;
