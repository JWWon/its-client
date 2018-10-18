import { Section, ShadowBox } from 'components/common';
import { EditorState } from 'draft-js';
import produce from 'immer';
import React, { Component } from 'react';

import * as s from './Announcement.styled';
import Content, { ContentInterface } from './Content';

interface State {
  selected: number;
  contentList: ContentInterface[];
}

class Announcement extends Component<{}, State> {
  public state: State = {
    selected: 0,
    contentList: [
      {
        title: '안녕하세요',
        editorState: EditorState.createEmpty(),
        selected: true,
      },
      {
        title: '일이에오',
        editorState: EditorState.createEmpty(),
        selected: false,
      },
      {
        title: '이에오',
        editorState: EditorState.createEmpty(),
        selected: false,
      },
    ],
  };

  public render() {
    const { contentList } = this.state;
    return (
      <Section title="왜 잇츠 교정인가?">
        <s.Container>
          <ShadowBox rmVerticalPadding>
            {contentList.map((content, index) => (
              <Content
                key={index}
                index={index}
                title={content.title}
                editorState={content.editorState}
                selected={content.selected}
                handleClick={this.handleClick}
              />
            ))}
          </ShadowBox>
        </s.Container>
      </Section>
    );
  }

  private handleClick = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    e.preventDefault();
    this.setState(prevState =>
      produce(prevState, (draft: State) => {
        draft.contentList[draft.selected].selected = false;
        draft.contentList[index].selected = true;
        draft.selected = index;
      })
    );
  };
}

export default Announcement;
