import styled from 'theme';

export const Container = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.size.desktop.navbar}rem;
  background: ${({ theme }) => theme.color.white};
`;
