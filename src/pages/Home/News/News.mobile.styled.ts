import styled from 'theme';

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: ${({ theme }) => theme.space.s}rem 0;
`;

export const Item = styled.a`
  width: 31%;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  box-shadow: -0.1rem 0.3rem 0.5rem rgba(0, 0, 0, 0.16);
  object-fit: cover;
`;

export const SubTitle = styled.h3`
  color: ${({ theme }) => theme.color.grayDark};
  font-size: ${({ theme }) => theme.font.size.m}rem;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  margin-left: ${({ theme }) => (theme.mobile ? 1 : 3)}rem;
`;
