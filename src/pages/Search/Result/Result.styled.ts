import styled, { fontSizeByDevice, selectByDevice } from 'theme';

export const Container = styled.div`
  position: relative;
  margin-bottom: 48px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Filter = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(256, 256, 256, 0.82);
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
  width: ${selectByDevice({ m: 35, d: 140 })};
  display: flex;
  flex-direction: column;
  align-items: center;
  ${selectByDevice({ m: 'justify-content: center', d: '' })};
`;

// *** IMG
export const Icon = styled.img.attrs({
  src: require('lib/icons/ic_landmark.svg'),
})`
  margin: ${selectByDevice({ m: '0 4px 0 8px', d: '0 10px 0 16px' })};
  height: ${selectByDevice({ m: 8, d: 16 })};
  /* ADD FOR IE */
  width: 10px;
`;

export interface SertifInterface {
  type: 'association' | 'invisalign' | 'specialist';
  active?: boolean;
}

export const SertifIcon = styled.img.attrs<SertifInterface, any>({
  src: ({ type, active }: SertifInterface) =>
    require(`lib/icons/ic_${type}${active ? '_active' : ''}.svg`),
})`
  height: ${selectByDevice({ m: 25, d: 64 })};
`;

// *** TEXT
interface SertifTextInterface {
  active?: boolean;
}

export const SertifText = styled<SertifTextInterface & any>('p')`
  ${({ theme }) => theme.mobile && 'display: none'};
  margin-top: auto;
  font-size: ${fontSizeByDevice('xs')};
  font-weight: ${({ theme }) => theme.font.weight.demiLight};
  color: ${({ active, theme }) =>
    theme.color[active ? 'blueDark' : 'grayLight']};
`;

export const Phone = styled.p`
  font-size: ${fontSizeByDevice('s')};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.color.grayDark};
`;

export const Address = styled(Phone)`
  ${({ theme }) =>
    theme.mobile ? 'margin-top: 4px' : `margin-left: ${theme.space.m}px`};
  font-size: ${fontSizeByDevice('xs')};
  font-weight: ${({ theme }) => theme.font.weight.regular};
`;

export const Landmark = styled(Address)`
  margin: 0;
  font-weight: ${({ theme }) => theme.font.weight.light};
  white-space: nowrap;
`;
