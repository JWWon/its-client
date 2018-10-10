import styled from 'theme';

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const Body = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.size.desktop.navbar}rem;
`;

export const Footer = styled.footer`
  width: 100%;
`;
