import React from 'react';
import * as s from './TitleWithBar.styled';

interface Props {
  title: string;
  margin?: string | null;
  hideBar?: boolean;
  vertical?: boolean;
}

const TitleWithBar: React.SFC<Props> = ({
  title,
  margin,
  hideBar,
  vertical,
}) => (
  <s.Wrapper margin={margin} vertical={vertical}>
    {!hideBar && <s.HrBar vertical={vertical} />}
    <s.Title vertical={vertical}>{title}</s.Title>
  </s.Wrapper>
);

TitleWithBar.defaultProps = {
  margin: null,
  hideBar: false,
  vertical: false,
};

export default TitleWithBar;
