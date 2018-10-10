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
  display: flex;
  justify-content: center;
`;

export const Body = styled.div`
  width: 100%;
  padding-top: ${({ theme }) => theme.size.desktop.navbar}rem;
`;

export const Footer = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.color.whiteDark};
  display: flex;
  justify-content: center;
`;
