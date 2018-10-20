import styled from 'theme';

export const BoxWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 64rem;
`;

export const Notice = styled.p`
  margin: 1.6rem 0;
  text-align: right;
  font-size: ${({ theme }) => theme.font.size.xs}rem;
  font-weight: ${({ theme }) => theme.font.weight.light};
  color: ${({ theme }) => theme.color.grayDark};
`;
