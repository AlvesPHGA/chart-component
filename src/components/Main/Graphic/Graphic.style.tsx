import styled from 'styled-components';

export const Graphic = styled.div`
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
   }
`;
