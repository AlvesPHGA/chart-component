import styled from 'styled-components';

export const Main = styled.main`
   width: 100%;
   background: ${(props) => props.theme.colors.white};
   border: 1px solid red;
   border-radius: ${12 / 16}rem;
   margin-top: ${20 / 16}rem;

   & h1 {
      text-align: center;
   }

   & .graphic {
      margin-top: ${40 / 16}rem;
      display: flex;
      justify-content: space-between;

      & .graphic__item {
         display: flex;
         flex-direction: column;
         align-items: center;
         gap: ${12 / 16}rem;

         & .item {
            width: ${60 / 16}rem;
            height: 200px;
            border-radius: ${4 / 16}rem;
            background: ${(props) => props.theme.colors.primary_softRed};
            transition: 0.4s ease-in-out;
            cursor: pointer;

            &.item--active {
               background: ${(props) => props.theme.colors.primary_cyan};
            }

            &:hover {
               opacity: 0.9;
            }
         }

         & span {
            color: ${(props) => props.theme.colors.neutral_mediumBrown};
         }
      }
   }
`;
