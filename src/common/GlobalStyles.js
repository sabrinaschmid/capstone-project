import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    line-height: 1.4;
    text-decoration: none;
    color: var(--dark-grey);
  }

  h1 {
    font-size: calc(14px + 1.5vmin);
    font-family: 'Poppins'; 
    color: var(--dark-green);
  }

  h2 {
    font-size: 22px;
  }

  h3 {
    font-size: 20px;
  }

  h4 {
    font-size: 18px;
  }

  input, button, textarea, select {
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: var(--dark-grey);
  }

  :root {
    --white: #ffffff;
    --light-grey: #d9dbde;
    --dark-grey: #404040;
    --light-green: #bbc0b6;
    --dark-green: #164c1a;
    --light-orange: #fff9ee;
    --medium-orange: #ffa743;
    --dark-orange: #ff7e43;
  }
`
