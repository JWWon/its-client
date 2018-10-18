import React, { ReactNode } from 'react';
import * as s from './ShadowBox.styled';

interface Props {
  children: ReactNode;
  size?: {
    width: number;
    height: number;
  } | null;
  dimmer?: boolean;
  rmVerticalPadding?: boolean;
}

const ShadowBox: React.SFC<Props> = ({
  children,
  size,
  dimmer,
  rmVerticalPadding,
}) => (
  <s.Container
    size={size}
    dimmer={dimmer}
    rmVerticalPadding={rmVerticalPadding}>
    {children}
  </s.Container>
);

ShadowBox.defaultProps = {
  size: null,
  dimmer: false,
  rmVerticalPadding: false,
};

export default ShadowBox;
