import icSearch from 'lib/icons/ic_search.svg';
import styled, { selectByDevice } from 'theme';

const barHeight = { m: 56, d: 130 };

export const Container = styled.div`
  width: 100%;
  height: ${selectByDevice(barHeight)};
  background: ${({ theme }) => theme.color.whiteDark};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormBar = styled.form`
  flex-basis: ${({ theme }) => theme.size.container + 2 * theme.space.s}px;
  height: ${selectByDevice(barHeight, 0.5)};
  padding: 0 ${({ theme }) => theme.space.s}px;
  display: flex;
  align-items: center;
`;

export const IconCircle = styled.div`
  width: ${selectByDevice(barHeight, 0.5)};
  height: ${selectByDevice(barHeight, 0.5)};
  border-radius: ${selectByDevice(barHeight, 0.25)};
  margin-right: ${selectByDevice({ m: 12, d: 26 })};
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
  flex: 1;
  height: 100%;
  margin-right: ${selectByDevice({ m: 14, d: 60 })};
  padding: 0 ${selectByDevice(barHeight, 0.25)};
  background: transparent;
  box-sizing: border-box;
  border-radius: ${selectByDevice(barHeight, 0.25)};
  border: ${selectByDevice({ m: 1, d: 2.5 })} solid
    ${({ theme }) => theme.color.blueDark};
  font-size: ${({ theme }) => theme.font.size.xl}rem;
`;
