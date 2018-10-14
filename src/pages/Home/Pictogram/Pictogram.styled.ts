import styled from 'theme';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.img.attrs({
  alt: 'pictogram of about service',
})`
  width: 100%;
  height: 9rem;
  object-fit: contain;
  object-position: center;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.color.blueDark};
  font-size: ${({ theme }) => theme.font.size.xs}rem;
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;
