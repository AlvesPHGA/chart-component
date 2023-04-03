import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap');

   *{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
   }

   body{
      font-family: 'DM Sans', sans-serif;
      background: ${(props) => props.theme.colors.mistyRose}
   }
`;
