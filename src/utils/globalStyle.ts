import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.colors.background};
  }
`;
 
export default GlobalStyle;