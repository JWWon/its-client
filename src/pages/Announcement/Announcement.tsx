import { Section, ShadowBox } from 'components/common';
import { EditorState } from 'draft-js';
import produce from 'immer';
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import * as s from './Announcement.styled';
import Content, { ContentInterface } from './Content';

interface ContentObj {
  [title: string]: ContentInterface;
}

interface Props extends RouteComponentProps<any> {}

interface State {
  selected: string;
  contentObj: ContentObj;
}

const list: ContentInterface[] = [
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
];

class Announcement extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    let contentObj: ContentObj = {};
    list.forEach((content: ContentInterface) => {
      contentObj = { ...contentObj, [content.title]: content };
    });
    const selected = list[0].title;
    contentObj[selected].selected = true;

    this.state = { selected, contentObj };
  }

  public render() {
    const { contentObj } = this.state;
    return (
      <Section title="왜 잇츠 교정인가?">
        <s.Container>
          <ShadowBox rmVerticalPadding>
            {Object.keys(contentObj).map(title => {
              const content = contentObj[title];
              return (
                <Content
                  key={content.title}
                  title={content.title}
                  editorState={content.editorState}
                  selected={content.selected}
                  handleClick={this.handleClick}
                />
              );
            })}
          </ShadowBox>
        </s.Container>
      </Section>
    );
  }

  private handleClick = (
    e: React.MouseEvent<HTMLDivElement>,
    title: string
  ) => {
    e.preventDefault();
    this.setState(prevState =>
      produce(prevState, (draft: State) => {
        draft.contentObj[draft.selected].selected = false;
        draft.contentObj[title].selected = true;
        draft.selected = title;
      })
    );
  };
}

export default Announcement;
