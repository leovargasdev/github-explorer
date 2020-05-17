import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

import imgBackground from '../assets/logo-git.svg';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #022c43 url(${imgBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: 16px Roboto, sans-serif;
  }

  #root{
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  ${media.lessThan('large')`
    #root{
      width: 100%;
      padding: 10px 8px;
    }
  `}

  button{
    cursor: pointer;
  }
`;
