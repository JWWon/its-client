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
    <s.Element name={content.id}>
      <s.TitleWrapper
        onClick={(e: React.MouseEvent<HTMLDivElement>) =>
          handleClick(e, content.id)
        }>
        <TitleWithBar title={content.title} margin="0" oneline />
        <s.Date>{content.createdAt}</s.Date>
        <s.Toggle>
          <s.Arrow selected={selected} />
        </s.Toggle>
      </s.TitleWrapper>
      <s.ContentWrapper selected={selected}>
        <Viewer content={content.content} />
      </s.ContentWrapper>
    </s.Element>
  );
};

export default Content;
