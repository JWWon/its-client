/* tslint:disable:jsx-no-lambda */
import { Editor, EditorState } from 'draft-js';
import moment from 'moment';
import React from 'react';

import { TitleWithBar } from 'components/common';
import * as s from './Content.styled';

export interface ContentInterface {
  readonly id: string;
  readonly title: string;
  readonly editorState: EditorState;
  selected: boolean;
}

interface Props {
  content: ContentInterface;
  readonly handleClick: (
    e: React.MouseEvent<HTMLDivElement>,
    id: string
  ) => void;
}

const muteChange = (e: EditorState) => null;

const Content: React.SFC<Props> = ({ content, handleClick }) => (
  <s.Content>
    <s.TitleWrapper>
      <TitleWithBar title={content.title} margin="0" />
      <s.Date>{moment().format('YYYY-MM-DD')}</s.Date>
      <s.Toggle
        onClick={(e: React.MouseEvent<HTMLDivElement>) =>
          handleClick(e, content.id)
        }>
        <s.Arrow selected={content.selected} />
      </s.Toggle>
    </s.TitleWrapper>
    <s.ContentWrapper selected={content.selected}>
      <Editor
        readOnly
        editorState={content.editorState}
        onChange={muteChange}
      />
    </s.ContentWrapper>
  </s.Content>
);

export default Content;
