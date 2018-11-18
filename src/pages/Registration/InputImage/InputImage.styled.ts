import styled from 'theme';
import mobile from 'theme/mobile';

import icAdd from 'lib/icons/ic_add.svg';
import icDelete from 'lib/icons/ic_delete.svg';

export const Input = styled.input.attrs({
  type: 'file',
  accept: 'image/*',
})`
  width: 0;
  height: 0;
  opacity: 0;
`;

const barSpace: number = mobile ? 2.6 : 8;
const imageWidth: number = mobile ? 8 : 24;
export const ImageWrapper = styled.div`
  position: relative;
  width: ${imageWidth}rem;
  height: ${imageWidth * 1.61}rem;
  margin: 2rem 0 0 ${barSpace}rem;
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.whiteDark};
  cursor: pointer;
`;

export const Preview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const iconSize: number = mobile ? 1 : 4;
export const AddIcon = styled.img.attrs({ src: icAdd })`
  width: ${iconSize}rem;
  height: ${iconSize}rem;
  object-fit: contain;
`;

const deleteSize: number = mobile ? 3 : 4;
export const Delete = styled.div`
  position: absolute;
  top: ${imageWidth * 0.02}rem;
  right: ${imageWidth * 0.02}rem;
  width: ${deleteSize}rem;
  height: ${deleteSize}rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.color.grayDark};
  background-image: url(${icDelete});
  background-size: ${deleteSize * 0.4}rem ${deleteSize * 0.4}rem;
  background-position: center;
  background-repeat: no-repeat;
  ${!mobile && 'visibility: hidden'};
  ${Label}:hover & {
    visibility: visible;
  }
`;
