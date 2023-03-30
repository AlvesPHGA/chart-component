import styled from 'styled-components';

export const Header = styled.header`
   align-items: center;
   background: ${(props) => props.theme.colors.primary_softRed};
   border-radius: 0.75rem;
   color: ${(props) => props.theme.colors.white};
   display: flex;
   justify-content: space-between;
   padding: 1.25rem;

   & p {
      font-size: ${20 / 16}rem;
      font-weight: 700;
      letter-spacing: ${0.5 / 16}rem;
      margin-top: ${12 / 16}rem;
   }

   & .logo {
      width: 60px;

      & .circle {
         background: ${(props) => props.theme.colors.neutral_darkBrown};
         border-radius: 50%;
         border: 1px solid ${(props) => props.theme.colors.neutral_darkBrown};
         height: 30px;
         position: relative;
         transform: translateX(70%);
         width: 30px;

         & .circle-02 {
            background: transparent;
            border-radius: 50%;
            border: 1px solid ${(props) => props.theme.colors.white};
            height: 30px;
            position: absolute;
            right: 50%;
            top: 50%;
            transform: translateY(-50%);
            width: 30px;
            z-index: 0;
         }
      }
   }
`;
