import React from 'react';
import * as s from './TitleWithBar.styled';

interface Props {
  title: string;
  margin?: string | null;
  vertical?: boolean;
}

const TitleWithBar: React.SFC<Props> = ({ title, margin, vertical }) => (
  <s.Wrapper margin={margin} vertical={vertical}>
    <s.HrBar vertical={vertical} />
    <s.Title vertical={vertical}>{title}</s.Title>
  </s.Wrapper>
);

TitleWithBar.defaultProps = {
  margin: null,
  vertical: false,
};

export default TitleWithBar;
