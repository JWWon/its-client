import styled, { selectByDevice } from 'theme';

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

const barSpace = { m: 26, d: 80 };
const imageWidth = { m: 80, d: 240 };
export const ImageWrapper = styled.div`
  position: relative;
  width: ${selectByDevice(imageWidth)};
  height: ${selectByDevice(imageWidth, 1.61)};
  margin: 20px 0 0 ${selectByDevice(barSpace)};
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

const iconSize = { m: 10, d: 40 };
export const AddIcon = styled.img.attrs({ src: icAdd })`
  width: ${selectByDevice(iconSize)};
  height: ${selectByDevice(iconSize)};
  object-fit: contain;
`;

const deleteSize = { m: 30, d: 40 };
export const Delete = styled.div`
  position: absolute;
  top: ${selectByDevice(imageWidth, 0.02)};
  right: ${selectByDevice(imageWidth, 0.02)};
  width: ${selectByDevice(deleteSize)};
  height: ${selectByDevice(deleteSize)};
  border-radius: ${selectByDevice(deleteSize, 0.1)};
  background-color: ${({ theme }) => theme.color.grayDark};
  background-image: url(${icDelete});
  background-size: ${selectByDevice(deleteSize, 0.4)};
  background-position: center;
  background-repeat: no-repeat;
  ${selectByDevice({ m: '', d: 'visibility: hidden' })};
  ${Label}:hover & {
    visibility: visible;
  }
`;
