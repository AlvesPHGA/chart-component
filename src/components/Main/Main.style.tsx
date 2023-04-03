import styled from 'styled-components';

export const Main = styled.main`
   width: 100%;
   background: ${(props) => props.theme.colors.white};
   border-radius: ${12 / 16}rem;
   margin-top: ${20 / 16}rem;

   & h1 {
      text-align: center;
   }

   & h1,
   & h2 {
      color: ${(props) => props.theme.colors.neutral_darkBrown};
   }
`;
