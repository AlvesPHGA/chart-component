import 'styled-components';

declare module 'styled-components' {
   export interface DefaultTheme {
      colors: {
         primary_cyan: string;
         primary_softRed: string;

         neutral_cream: string;
         neutral_darkBrown: string;
         neutral_mediumBrown: string;
         neutral_veryPaleOrange: string;

         white: string;
         mistyRose: string;
      };
   }
}
