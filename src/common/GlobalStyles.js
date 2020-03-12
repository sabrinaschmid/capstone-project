import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: #fff9ee;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    line-height: 1.4;
    color: #404040;
    height: 100vh;
    text-decoration: none;
  }

  input, button, textarea {
    font-size: 1em;

  }

  a {
    text-decoration: none;
    color: #404040;
  }
`
