import { Link as _Link } from 'react-router-dom';

import blog from 'lib/logos/logo_blog.svg';
import facebook from 'lib/logos/logo_facebook.svg';
import instagram from 'lib/logos/logo_instagram.svg';
import styled, { selectByDevice } from 'theme';

export const Container = styled.div`
  flex-basis: ${({ theme }) => theme.size.container + 2 * theme.space.s}px;
  padding: ${props =>
    `${selectByDevice({ m: 30, d: 90 })(props)} ${props.theme.space.s}px`};
  display: flex;
  ${selectByDevice({ m: 'flex-direction: column', d: '' })};
`;

export const Right = styled.div`
  margin-left: auto;
  display: flex;
  ${selectByDevice({
    m: `justify-content: flex-end;
        align-items: center`,
    d: `flex-direction: column;
        justify-content: center;
        align-items: flex-end`,
  })}
`;

export const Header = styled.div`
  display: flex;
  ${selectByDevice({ m: 'margin-right: 20px', d: 'margin-bottom: 2rem' })}
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 12px 0;
  margin-left: -${selectByDevice({ m: 10, d: 20 })};
  p,
  img {
    margin-left: ${selectByDevice({ m: 10, d: 20 })};
  }
  &:first-of-type {
    margin-top: 0;
  }
`;

export const Copyright = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: ${selectByDevice({ m: 8, d: 24 })};
`;

export const InfoText = styled.p`
  font-size: ${({ theme }) => (theme.mobile ? 1.2 : theme.font.size.xs)}rem;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.color.grayDark};
  span {
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
`;

const iconSize = { m: 16, d: 32 };
export const Link = styled.a.attrs({
  target: '_blank',
})`
  width: ${selectByDevice(iconSize)};
  height: ${selectByDevice(iconSize)};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${selectByDevice({ m: 12, d: 20 })};
  &:first-of-type {
    margin-left: 0;
  }
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export const Facebook = styled(Icon).attrs({ src: facebook })``;
export const Instagram = styled(Icon).attrs({ src: instagram })``;
export const Blog = styled(Icon).attrs({ src: blog })``;

const btnHeight = { m: 18, d: 38 };
export const Button = styled(_Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${selectByDevice({ m: 120, d: 200 })};
  height: ${selectByDevice(btnHeight)};
  border-radius: ${selectByDevice(btnHeight, 0.5)};
  box-sizing: border-box;
  background: ${({ theme }) => theme.color.blueDark};
  p {
    font-size: ${({ theme }) => theme.font.size.s}rem;
    font-weight: ${({ theme }) => theme.font.weight.demiLight};
    color: ${({ theme }) => theme.color.white};
  }
  &:hover {
    background: transparent;
    border: 2px solid ${({ theme }) => theme.color.blueDark};
    p {
      color: ${({ theme }) => theme.color.blueDark};
    }
  }
  transition: all 0.2s ease-out;
`;
