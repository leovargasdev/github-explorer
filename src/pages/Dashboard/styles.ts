import styled, { css } from 'styled-components';
import { shade, lighten } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #f0f0f5;
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
    border: 2px solid #fff;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #115173;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
      background: ${shade(0.1, '#115173')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

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

  img {
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
