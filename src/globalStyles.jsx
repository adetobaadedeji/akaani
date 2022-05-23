import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

:root {
  --white: #FFFFFF;
  --black: #000000;
  --teal : #549A9A;
  --cart-gray: #514D4D;
  --darker-gray: #6B6464;
  --dark-gray: #989898;
  --medium-gray:  #AAA8A8;
  --light-gray: #C0C0C0;
  --orange: #FCB72B;

  //animation
  --transition: ease-in-out 0.2s;
}

*,
*::before,
*::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

html {
  font-size: 62.5%; 
}

body {
  font-family: 'Poppins', sans-serif;
  height: 100vh;
  background: var(-white);
}

input, button, textarea, select {
  //font = font-family, font-size, font-weight
  font: inherit;
}

p {
  overflow-wrap: break-word;
  hyphens: auto;
}

a {
  color: unset;
  text-decoration: none;
}

`;
