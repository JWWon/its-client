import { Element as _Element } from 'react-scroll';
import styled, { selectByDevice } from 'theme';

import arrowBlue from 'lib/icons/ic_arrow_blue.svg';
import arrowGray from 'lib/icons/ic_arrow_gray.svg';

interface ContentProps {
  selected: boolean;
}

export const Element = styled(_Element)`
  width: 100%;
  &:last-of-type {
    padding-bottom: ${({ theme }) => theme.space.s}px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  height: ${selectByDevice({ m: 40, d: 80 })};
  align-items: center;
`;

export const Date = styled.p`
  margin-left: auto;
  margin-right: ${({ theme }) => theme.space.s}px;
  font-size: ${({ theme }) => theme.font.size.s}rem;
  color: ${({ theme }) => theme.color.grayDark};
  font-weight: ${({ theme }) => theme.font.weight.light};
`;

const toggleSize = { m: 12, d: 30 };
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
  padding: ${({ theme }) => (theme.mobile ? 1 : theme.space.s)}px;
  ${({ selected }) => !selected && 'display: none'};
`;
