import styled from 'theme';

export const Wrapper = styled.div`
  width: 30%;
  height: 21rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.8rem;
  align-items: center;
  box-shadow: -0.2rem 0.4rem 1.5rem rgba(0, 0, 0, 0.16);
  box-sizing: border-box;
`;

export const Icon = styled.img.attrs({
  alt: 'pictogram of about service',
})`
  width: 100%;
  height: 9rem;
  object-fit: contain;
  object-position: center;
  margin-bottom: 2.8rem;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.color.blueDark};
  font-size: ${({ theme }) => theme.font.size.xs}rem;
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;
