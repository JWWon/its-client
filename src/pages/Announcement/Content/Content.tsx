/* tslint:disable:jsx-no-lambda */
import Viewer from 'components/common/Viewer';
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

const Content: React.SFC<Props> = ({ content, pointer, handleClick }) => {
  const selected = content.id === pointer;
  return (
    <s.Content>
      <s.TitleWrapper
        onClick={(e: React.MouseEvent<HTMLDivElement>) =>
          handleClick(e, content.id)
        }>
        <TitleWithBar title={content.title} margin="0" />
        <s.Date>{content.createdAt.format('YYYY.MM.DD')}</s.Date>
        <s.Toggle>
          <s.Arrow selected={selected} />
        </s.Toggle>
      </s.TitleWrapper>
      <s.ContentWrapper selected={selected}>
        <Viewer editorState={content.content} />
      </s.ContentWrapper>
    </s.Content>
  );
};

export default Content;
