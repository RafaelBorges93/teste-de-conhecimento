import  { createGlobalStyle }  from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --yellow: #FAD424;
    --black: #111111;
    
    --blue: rgba(97,156,235,0.2);
    --blue-shop: #619CEB;
    --pink: rgba(200,118,118,0.2);
    --pink-shop: #EE797E;
    --red: #ff0000;
    
    --text-title: #000000;
    --text-body: #A8A4A4;
    
    --background: #f2f2f2; 
    --shape: #ffffff;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`