import styled, { selectByDevice } from 'theme';

export const Container = styled.div`
  margin-bottom: 4.8rem;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Wrapper = styled.div`
  height: ${props => selectByDevice(props.theme.size.shadowBox)(props)};
  display: flex;
`;

export const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HrContent = styled.div`
  ${selectByDevice({
    m: `&:first-of-type {
          display: flex;
          align-items: center;
        }`,
    d: `display: flex;
        align-items: center;
        `,
  })}
`;

export const SertifWrapper = styled.div`
  width: ${selectByDevice({ m: 3.5, d: 14 })};
  display: flex;
  flex-direction: column;
  align-items: center;
  ${selectByDevice({ m: 'justify-content: center', d: '' })};
`;

// *** IMG
export const Icon = styled.img.attrs({
  src: require('lib/icons/ic_landmark.svg'),
})`
  margin: ${selectByDevice({ m: '0 0.4rem 0 0.8rem', d: '0 1rem 0 1.6rem' })};
  height: ${selectByDevice({ m: 0.8, d: 1.6 })};
  /* ADD FOR IE */
  width: 1rem;
`;

export interface SertifInterface {
  type: 'association' | 'invisalign' | 'specialist';
  active?: boolean;
}

export const SertifIcon = styled.img.attrs<SertifInterface, any>({
  src: ({ type, active }: SertifInterface) =>
    require(`lib/icons/ic_${type}${active ? '_active' : ''}.svg`),
})`
  height: ${selectByDevice({ m: 2.5, d: 6.4 })};
`;

// *** TEXT
interface SertifTextInterface {
  active?: boolean;
}

export const SertifText = styled<SertifTextInterface & any>('p')`
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
  white-space: nowrap;
`;
