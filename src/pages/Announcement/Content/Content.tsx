/* tslint:disable:jsx-no-lambda */
import { Editor, EditorState } from 'draft-js';
import moment from 'moment';
import React from 'react';

import { TitleWithBar } from 'components/common';
import * as s from './Content.styled';

export interface ContentInterface {
  readonly title: string;
  readonly editorState: EditorState;
  selected: boolean;
}

interface Props extends ContentInterface {
  readonly handleClick: (
    e: React.MouseEvent<HTMLDivElement>,
    title: string
  ) => void;
}

const muteChange = (e: EditorState) => null;

const Content: React.SFC<Props> = ({
  title,
  editorState,
  selected,
  handleClick,
}) => (
  <s.Content>
    <s.TitleWrapper>
      <TitleWithBar title={title} margin="0" />
      <s.Date>{moment().format('YYYY-MM-DD')}</s.Date>
      <s.Toggle
        onClick={(e: React.MouseEvent<HTMLDivElement>) =>
          handleClick(e, title)
        }>
        <s.Arrow selected={selected} />
      </s.Toggle>
    </s.TitleWrapper>
    <s.ContentWrapper selected={selected}>
      <Editor readOnly editorState={editorState} onChange={muteChange} />
    </s.ContentWrapper>
  </s.Content>
);

export default Content;
