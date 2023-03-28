import styled from 'styled-components';

export const Container = styled.section`
   align-items: center;
   display: flex;
   flex-direction: column;
   height: 100vh;
   justify-content: center;

   & .card {
      border: 1px solid red;
      width: 30vw;
      height: 60vh;
   }
`;
