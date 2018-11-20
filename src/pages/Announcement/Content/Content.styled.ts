import styled, { selectByDevice } from 'theme';

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
  height: ${selectByDevice({ m: 4, d: 8 })};
  align-items: center;
`;

export const Date = styled.p`
  margin-left: auto;
  margin-right: ${({ theme }) => theme.space.s}rem;
  font-size: ${({ theme }) => theme.font.size.s}rem;
  color: ${({ theme }) => theme.color.grayDark};
  font-weight: ${({ theme }) => theme.font.weight.light};
`;

const toggleSize = { m: 1.2, d: 3 };
export const Toggle = styled.div`
  width: ${selectByDevice(toggleSize)};
  height: ${selectByDevice(toggleSize)};
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
  padding: ${({ theme }) => (theme.mobile ? 1 : theme.space.s)}rem;
  ${({ selected }) => !selected && 'display: none'};
`;
