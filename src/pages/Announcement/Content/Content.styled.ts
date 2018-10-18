import arrowBlue from 'assets/icons/ic_arrow_blue.svg';
import arrowGray from 'assets/icons/ic_arrow_gray.svg';
import styled from 'theme';

interface ContentProps {
  selected: boolean;
}

export const Content = styled.div`
  width: 100%;
  &:last-of-type {
    padding-bottom: ${({ theme }) => theme.space.desktop.s}rem;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  height: 8rem;
  align-items: center;
`;

export const Date = styled.p`
  margin-left: auto;
  margin-right: ${({ theme }) => theme.space.desktop.s}rem;
  font-size: ${({ theme }) => theme.font.size.s}rem;
  color: ${({ theme }) => theme.color.grayDark};
  font-weight: ${({ theme }) => theme.font.weight.light};
`;

export const Toggle = styled.div`
  width: 3rem;
  height: 3rem;
  &:hover {
    cursor: pointer;
  }
`;

export const Arrow = styled.img.attrs<ContentProps, any>({
  src: ({ selected }: ContentProps) => (selected ? arrowBlue : arrowGray),
})`
  width: 100%;
  height: 100%;
  transform: ${({ selected }) => selected && `rotate(-90deg)`};
  transition: all 0.24s ease-out;
`;

export const ContentWrapper = styled<ContentProps, any>('div')`
  background-color: ${({ theme }) => theme.color.whiteDim};
  transition: all 0.24s ease-out;
  ${({ selected, theme }) =>
    selected
      ? `
        padding: ${theme.space.desktop.s}rem;`
      : `
        height: 0;
      `};
`;
