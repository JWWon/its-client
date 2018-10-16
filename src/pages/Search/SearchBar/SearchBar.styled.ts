import icDelete from 'assets/icons/ic_delete.svg';
import icSearch from 'assets/icons/ic_search.svg';
import styled from 'theme';

const barHeight: number = 13;

export const Container = styled.div`
  width: 100%;
  height: ${barHeight}rem;
  background: ${({ theme }) => theme.color.whiteDark};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BarWrapper = styled.div`
  flex-basis: ${({ theme }) =>
    theme.size.desktop.container + 2 * theme.space.desktop.s}rem;
  height: ${barHeight * 0.5}rem;
  padding: 0 ${({ theme }) => theme.space.desktop.s}rem;
  display: flex;
  align-items: center;
`;

export const IconCircle = styled.div`
  width: ${barHeight * 0.5}rem;
  height: ${barHeight * 0.5}rem;
  border-radius: ${barHeight * 0.25}rem;
  margin-right: 2.6rem;
  background: ${({ theme }) => theme.color.blueDark};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconSearch = styled.img.attrs({
  src: icSearch,
})`
  width: 40%;
  height: 40%;
`;

export const InputSearch = styled.input.attrs({
  type: 'text',
  name: 'keyword',
  placeholder: '강남역, 롯데월드 타워 등',
})`
  width: 86%;
  height: 100%;
  padding: 0 ${barHeight * 0.25}rem;
  background: transparent;
  box-sizing: border-box;
  border-radius: ${barHeight * 0.25}rem;
  border: 0.25rem solid ${({ theme }) => theme.color.blueDark};
  font-size: ${({ theme }) => theme.font.size.xl}rem;
`;

export const Dismiss = styled.div`
  margin-left: auto;
  width: ${barHeight * 0.2}rem;
  height: ${barHeight * 0.2}rem;
  background: no-repeat center url(${icDelete});
  &:hover {
    cursor: pointer;
  }
`;
