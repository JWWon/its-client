import React from 'react';
import * as s from './TitleWithBar.styled';

interface Props {
  title: string;
  margin?: string | null;
}

const TitleWithBar: React.SFC<Props> = ({ title, margin }) => (
  <s.Wrapper margin={margin}>
    <s.HrBar />
    <s.Title>{title}</s.Title>
  </s.Wrapper>
);

TitleWithBar.defaultProps = {
  margin: null,
};

export default TitleWithBar;
