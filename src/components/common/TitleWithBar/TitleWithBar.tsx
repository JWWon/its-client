import _ from 'lodash';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import * as s from './TitleWithBar.styled';

interface Props {
  title: string;
  margin?: string | null;
  hideBar?: boolean;
  vertical?: boolean;
  oneline?: boolean;
}

const TitleWithBar: React.SFC<Props> = ({
  title,
  margin,
  hideBar,
  vertical,
  oneline,
}) => {
  const renderTitle = oneline ? _.replace(title, '<br />', ' ') : title;
  return (
    <s.Wrapper margin={margin} vertical={vertical}>
      {!hideBar && <s.HrBar vertical={vertical} />}
      <s.Title vertical={vertical}>{ReactHtmlParser(renderTitle)}</s.Title>
    </s.Wrapper>
  );
};

TitleWithBar.defaultProps = {
  margin: null,
  hideBar: false,
  vertical: false,
};

export default TitleWithBar;
