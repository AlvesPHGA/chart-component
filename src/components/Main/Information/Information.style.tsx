import styled from 'styled-components';

export const Information = styled.section``;

export const Info = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;

   & .total {
      & h2 {
         margin-top: ${4 / 16}rem;
         font-size: ${30 / 16}rem;
      }
   }

   & .percents {
      text-align: right;

      & span {
         display: block;
         font-weight: 700;

         &:nth-child(2) {
            margin-top: ${4 / 16}rem;
            font-weight: 400;
         }
      }
   }
`;
