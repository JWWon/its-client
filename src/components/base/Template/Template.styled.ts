import styled from 'theme';

interface Props {
  isTop: boolean;
}

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

export const Navbar = styled<Props, any>('nav')`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.color.white};
  border-bottom: ${({ isTop, theme }) =>
    isTop ? 'none' : `1px solid ${theme.color.grayLight}`};
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
