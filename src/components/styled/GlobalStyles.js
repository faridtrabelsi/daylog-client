import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  font-family: 'Quicksand', sans-serif;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
}
`;

export default GlobalStyle;
