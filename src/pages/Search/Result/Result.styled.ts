import landmark from 'lib/icons/ic_landmark.svg';
import styled from 'theme';

export const Container = styled.div`
  margin-bottom: 4.8rem;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Wrapper = styled.div`
  height: ${({ theme }) => theme.size.desktop.shadowBox}rem;
  display: flex;
`;

export const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HrContent = styled.div`
  display: flex;
  align-items: center;
`;

export const SertifWrapper = styled.div`
  width: 14rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

// *** IMG
export const Icon = styled.img.attrs({ src: landmark })`
  margin: ${({ theme }) => `0 1rem 0 ${theme.space.desktop.s}rem`};
  height: 1.6rem;
`;

export interface SertifInterface {
  type: 'association' | 'invisalign' | 'specialist';
  active?: boolean;
}

export const SertifIcon = styled.img.attrs<SertifInterface, any>({
  src: ({ type, active }: SertifInterface) =>
    require(`lib/icons/ic_${type}${active ? '_active' : ''}.svg`),
})`
  height: 6.4rem;
`;

// *** TEXT
interface SertifTextInterface {
  active?: boolean;
}

export const SertifText = styled<SertifTextInterface, any>('p')`
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
  margin-left: ${({ theme }) => theme.space.desktop.m}rem;
  font-size: ${({ theme }) => theme.font.size.xs}rem;
  font-weight: ${({ theme }) => theme.font.weight.regular};
`;

export const Landmark = styled(Address)`
  margin-left: 0;
  font-weight: ${({ theme }) => theme.font.weight.light};
`;
