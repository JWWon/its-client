import icSearch from 'lib/icons/ic_search.svg';
import styled from 'theme';
import mobile from 'theme/mobile';

const barHeight = mobile ? 5.6 : 13;

export const Container = styled.div`
  width: 100%;
  height: ${barHeight}rem;
  background: ${({ theme }) => theme.color.whiteDark};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormBar = styled.form`
  flex-basis: ${({ theme }) => theme.size.container + 2 * theme.space.s}rem;
  height: ${barHeight * 0.5}rem;
  padding: 0 ${({ theme }) => theme.space.s}rem;
  display: flex;
  align-items: center;
`;

export const IconCircle = styled.div`
  width: ${barHeight * 0.5}rem;
  height: ${barHeight * 0.5}rem;
  border-radius: ${barHeight * 0.25}rem;
  margin-right: ${mobile ? 1.2 : 2.6}rem;
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
  margin-right: ${mobile ? 1.4 : 6}rem;
  padding: 0 ${barHeight * 0.25}rem;
  background: transparent;
  box-sizing: border-box;
  border-radius: ${barHeight * 0.25}rem;
  border: ${mobile ? '1px' : '0.25rem'} solid
    ${({ theme }) => theme.color.blueDark};
  font-size: ${({ theme }) => theme.font.size.xl}rem;
`;
