import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
    
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    scroll-behavior: smooth;
    height: 100%;
  }

  body {
    min-height: 100%;
    width: 100%;
    font-size: 1.6rem;
    position: relative;
    background-color: ${({ theme }) => theme.body};
  }

  button {
    border: 0;
    outline: none;
    background: transparent;
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.1;
    margin-bottom: 25px;
    font-family: 'Inter', sans-serif;
    color: ${({ theme }) => theme.title}
  }

  h1 {
    font-size: 4.88rem;
  }

  h2 {
    font-size: 3.9rem;
  }

  h3 {
    font-size: 3.125rem;
  }

  h4 {
    font-size: 2.5rem;
  }

  h5 {
    font-size: 2rem;
  }

  h6, p {
    font-size: 1.6rem;
  }

  a, a:visited, a:active {
    color: ${({ theme }) => theme.main};
    text-decoration: none;
    transition: .2s color ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.title};
    }
  }

  ul {
    list-style: none;
  }
`;
