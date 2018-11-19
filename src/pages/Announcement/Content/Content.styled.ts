import styled from 'theme';
import mobile from 'theme/mobile';

import arrowBlue from 'lib/icons/ic_arrow_blue.svg';
import arrowGray from 'lib/icons/ic_arrow_gray.svg';

interface ContentProps {
  selected: boolean;
}

export const Content = styled.div`
  width: 100%;
  &:last-of-type {
    padding-bottom: ${({ theme }) => theme.space.s}rem;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  height: ${mobile ? 4 : 8}rem;
  align-items: center;
`;

export const Date = styled.p`
  margin-left: auto;
  margin-right: ${({ theme }) => theme.space.s}rem;
  font-size: ${({ theme }) => theme.font.size.s}rem;
  color: ${({ theme }) => theme.color.grayDark};
  font-weight: ${({ theme }) => theme.font.weight.light};
`;

const toggleSize: number = mobile ? 1.2 : 3;
export const Toggle = styled.div`
  width: ${toggleSize}rem;
  height: ${toggleSize}rem;
  &:hover {
    cursor: pointer;
  }
`;

export const Arrow = styled<ContentProps & any>('img').attrs({
  src: ({ selected }: ContentProps) => (selected ? arrowBlue : arrowGray),
})`
  width: 100%;
  height: 100%;
  transform: ${({ selected }) => selected && `rotate(-90deg)`};
  transition: all 0.24s ease-out;
`;

export const ContentWrapper = styled<ContentProps & any>('div')`
  background-color: ${({ theme }) => theme.color.whiteDim};
  padding: ${({ theme }) => (mobile ? 1 : theme.space.s)}rem;
  ${({ selected }) => !selected && 'display: none'};
`;
