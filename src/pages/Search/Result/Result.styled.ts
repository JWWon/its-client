import landmark from 'lib/icons/ic_landmark.svg';
import styled from 'theme';

export const Container = styled.div`
  margin-bottom: 4.8rem;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Wrapper = styled.div`
  height: ${({ theme }) => theme.size.shadowBox}rem;
  display: flex;
`;

export const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HrContent = styled.div`
  ${({ theme }) =>
    theme.mobile
      ? `&:first-of-type {
          display: flex;
          align-items: center;
        }`
      : `display: flex;
        align-items: center;
  `};
`;

export const SertifWrapper = styled.div`
  width: ${({ theme }) => (theme.mobile ? 3.5 : 14)}rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.mobile && 'justify-content: center'};
`;

// *** IMG
export const Icon = styled.img.attrs({ src: landmark })`
  margin: ${({ theme }) => `0 1rem 0 ${theme.space.s}rem`};
  height: ${({ theme }) => (theme.mobile ? 0.8 : 1.6)}rem;
`;

export interface SertifInterface {
  type: 'association' | 'invisalign' | 'specialist';
  active?: boolean;
}

export const SertifIcon = styled.img.attrs<SertifInterface, any>({
  src: ({ type, active }: SertifInterface) =>
    require(`lib/icons/ic_${type}${active ? '_active' : ''}.svg`),
})`
  height: ${({ theme }) => (theme.mobile ? 2.5 : 6.4)}rem;
`;

// *** TEXT
interface SertifTextInterface {
  active?: boolean;
}

export const SertifText = styled<SertifTextInterface, any>('p')`
  ${({ theme }) => theme.mobile && 'display: none'};
  margin-top: auto;
  font-size: ${({ theme }) => theme.font.size.xs}rem;
  font-weight: ${({ theme }) => theme.font.weight.demiLight};
  color: ${({ active, theme }) =>
    theme.color[active ? 'blueDark' : 'grayLight']};
`;

export const Phone = styled.p`
  font-size: ${({ theme }) => theme.font.size.s}rem;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.color.grayDark};
`;

export const Address = styled(Phone)`
  ${({ theme }) =>
    theme.mobile ? 'margin-top: 0.4rem' : `margin-left: ${theme.space.m}rem`};
  font-size: ${({ theme }) => theme.font.size.xs}rem;
  font-weight: ${({ theme }) => theme.font.weight.regular};
`;

export const Landmark = styled(Address)`
  margin: 0;
  font-weight: ${({ theme }) => theme.font.weight.light};
`;
