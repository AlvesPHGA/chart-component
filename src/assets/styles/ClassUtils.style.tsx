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
      font-size: ${12 / 16}rem;
      font-weight: 400;
   }

   & .padding-all {
      padding: ${20 / 16}rem;
   }

   & .border {
      width: 100%;
      height: ${1 / 16}rem;
      background: ${(props) => props.theme.colors.neutral_mediumBrown};
      opacity: 0.3;
      margin: ${20 / 16}rem auto;
   }

   & .mediumBrown {
      color: ${(props) => props.theme.colors.neutral_mediumBrown};
   }
`;
