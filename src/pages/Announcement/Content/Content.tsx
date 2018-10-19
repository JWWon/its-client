/* tslint:disable:jsx-no-lambda */
import { Editor, EditorState } from 'draft-js';
import React from 'react';

import { AnnouncementInterface } from 'api/announcement';
import { TitleWithBar } from 'components/common';
import * as s from './Content.styled';

interface Props {
  readonly content: AnnouncementInterface;
  readonly pointer: string | null;
  readonly handleClick: (
    e: React.MouseEvent<HTMLDivElement>,
    id: string
  ) => void;
}

const muteChange = (e: EditorState) => null;

const Content: React.SFC<Props> = ({ content, pointer, handleClick }) => {
  const selected = content.id === pointer;
  return (
    <s.Content>
      <s.TitleWrapper>
        <TitleWithBar title={content.title} margin="0" />
        <s.Date>{content.createdAt.format('YYYY.MM.DD')}</s.Date>
        <s.Toggle
          onClick={(e: React.MouseEvent<HTMLDivElement>) =>
            handleClick(e, content.id)
          }>
          <s.Arrow selected={selected} />
        </s.Toggle>
      </s.TitleWrapper>
      <s.ContentWrapper selected={selected}>
        <Editor readOnly editorState={content.content} onChange={muteChange} />
      </s.ContentWrapper>
    </s.Content>
  );
};

export default Content;
