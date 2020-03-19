import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {

    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    line-height: 1.4;
    color: var(--dark-grey);
    height: 100vh;
    text-decoration: none;
  }

  input, button, textarea {
    font-size: 1em;

  }

  a {
    text-decoration: none;
    color: var(--dark-grey);
  }

  :root {
    --white: #fff;
    --light-grey: #d9dbde;
    --dark-grey: #404040;
    --light-green: #bbc0b6;
    --dark-green: #164c1a;
    --light-orange: #fff9ee;
    --medium-orange: #ffa743;
    --dark-orange: #ff7e43;
  }
`
