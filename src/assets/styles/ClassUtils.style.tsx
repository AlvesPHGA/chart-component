import styled from 'styled-components';

export const Container = styled.section`
   align-items: center;
   display: flex;
   flex-direction: column;
   height: 100vh;
   justify-content: center;

   & .card {
      width: 30vw;
      height: 60vh;
   }

   & .sub__legend {
      font-size: ${14 / 16}rem;
   }
`;
