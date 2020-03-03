import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #E9EAEB;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    line-height: 1.4;
    color: #404040;

    height: 100vh;
  }

  input, button, textarea {
    font-size: 1em;
  }
`
