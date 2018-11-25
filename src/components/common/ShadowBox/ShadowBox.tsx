import React, { ReactNode } from 'react';
import * as s from './ShadowBox.styled';

interface Props {
  children: ReactNode;
  className?: string;
  style?: { [x: string]: string };
  single?: boolean;
  space?: string | null;
  dimmer?: boolean;
}

const ShadowBox: React.SFC<Props> = ({
  children,
  className,
  dimmer,
  single,
  space,
  style,
}) => (
  <s.Container
    style={style}
    dimmer={dimmer}
    single={single}
    space={space}
    className={className}>
    {children}
  </s.Container>
);

ShadowBox.defaultProps = {
  single: false,
  space: null,
  dimmer: false,
};

export default ShadowBox;
