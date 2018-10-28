import React, { ReactNode } from 'react';
import * as s from './ShadowBox.styled';

interface Props {
  children: ReactNode;
  style?: { [x: string]: string };
  single?: boolean;
  space?: string | null;
  dimmer?: boolean;
}

const ShadowBox: React.SFC<Props> = ({
  children,
  dimmer,
  single,
  space,
  style,
}) => (
  <s.Container style={style} dimmer={dimmer} single={single} space={space}>
    {children}
  </s.Container>
);

ShadowBox.defaultProps = {
  single: false,
  space: null,
  dimmer: false,
};

export default ShadowBox;
