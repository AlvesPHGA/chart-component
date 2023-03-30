import styled from 'styled-components';

export const Header = styled.header`
   background: ${(props) => props.theme.colors.primary_softRed};
   border-radius: 0.75rem;
   color: ${(props) => props.theme.colors.white};
   padding: 1.25rem;
   display: flex;
   justify-content: space-between;
   align-items: center;

   & p {
      font-size: ${20 / 16}rem;
      font-weight: 700;
      letter-spacing: ${0.5 / 16}rem;
      margin-top: ${12 / 16}rem;
   }

   & .logo {
      width: 60px;

      & .circle {
         width: 30px;
         height: 30px;
         border-radius: 50%;
         border: 1px solid ${(props) => props.theme.colors.neutral_darkBrown};
         background: ${(props) => props.theme.colors.neutral_darkBrown};
         position: relative;
         transform: translateX(70%);

         & .circle-02 {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: transparent;
            border: 1px solid ${(props) => props.theme.colors.white};
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 50%;
            z-index: 0;
         }
      }
   }
`;
