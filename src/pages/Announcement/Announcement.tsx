import { Section, ShadowBox } from 'components/common';
import { EditorState } from 'draft-js';
import produce from 'immer';
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import * as s from './Announcement.styled';
import Content, { ContentInterface } from './Content';

interface ContentObj {
  [id: string]: ContentInterface;
}

interface Props extends RouteComponentProps<any> {}

interface State {
  selected: string;
  contentObj: ContentObj;
}

const list: ContentInterface[] = [
  {
    id: 'number1',
    title: '안녕하세요',
    editorState: EditorState.createEmpty(),
    selected: false,
  },
  {
    id: 'number2',
    title: '일이에오',
    editorState: EditorState.createEmpty(),
    selected: false,
  },
  {
    id: 'number3',
    title: '이에오',
    editorState: EditorState.createEmpty(),
    selected: false,
  },
];

class Announcement extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    const { hash } = props.location;
    let contentObj: ContentObj = {};

    list.forEach((content: ContentInterface) => {
      contentObj = { ...contentObj, [content.id]: content };
    });

    const key: string = hash ? hash.replace(/^#/g, '') : list[0].id;
    contentObj[key].selected = true;

    this.state = { selected: key, contentObj };
    this.props.history.replace(`/announcement#${key}`);
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
                  key={content.id}
                  content={content}
                  handleClick={this.handleClick}
                />
              );
            })}
          </ShadowBox>
        </s.Container>
      </Section>
    );
  }

  private handleClick = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    e.preventDefault();
    this.setState(prevState =>
      produce(prevState, (draft: State) => {
        draft.contentObj[draft.selected].selected = false;
        draft.contentObj[id].selected = true;
        draft.selected = id;
      })
    );
    this.props.history.replace(`/announcement#${id}`);
  };
}

export default Announcement;
