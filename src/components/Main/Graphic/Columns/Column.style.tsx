import styled from 'styled-components';

export const Column = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: ${12 / 16}rem;
   transition: all 0.4s ease-in-out;
   cursor: pointer;

   &:hover {
      opacity: 0.9;

      & .legend {
         visibility: initial;
      }
   }

   & .legend {
      padding: ${8 / 16}rem ${4 / 16}rem;
      border-radius: ${4 / 16}rem;
      background: ${(props) => props.theme.colors.neutral_darkBrown};
      visibility: hidden;

      & span {
         font-size: ${14 / 16}rem;
         color: ${(props) => props.theme.colors.white};
      }
   }

   & .item {
      width: ${60 / 16}rem;
      border-radius: ${4 / 16}rem;
      background: ${(props) => props.theme.colors.primary_softRed};

      &.item--active {
         background: ${(props) => props.theme.colors.primary_cyan};
      }
   }
`;
