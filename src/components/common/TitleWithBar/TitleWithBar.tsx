import React from 'react';
import * as s from './TitleWithBar.styled';

interface Props {
  title: string;
  margin?: string | null;
  barPosition?: 'top' | 'bottom';
}

const TitleWithBar: React.SFC<Props> = ({ title, margin, barPosition }) => (
  <s.Wrapper margin={margin} barPosition={barPosition}>
    <s.HrBar barPosition={barPosition} />
    <s.Title barPosition={barPosition}>{title}</s.Title>
  </s.Wrapper>
);

TitleWithBar.defaultProps = {
  margin: null,
};

export default TitleWithBar;
