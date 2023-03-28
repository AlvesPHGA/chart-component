import styled from 'styled-components';

export const Header = styled.header`
   background: ${(props) => props.theme.colors.primary_softRed};
   padding: 1.25rem;
   border-radius: 0.75rem;
   color: ${(props) => props.theme.colors.white};
`;
