import { Editor, EditorState } from 'draft-js';
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Content as ContentInterface, getContent } from 'api/meta';
import { Section, ShadowBox } from 'components/common';
import * as s from './About.styled';

class About extends Component<RouteComponentProps, ContentInterface> {
  public state = {
    content: EditorState.createEmpty(),
  };

  public async componentDidMount() {
    const response = await getContent();
    this.setState(response);
  }

  public render() {
    return (
      <Section title="잇츠교정이란?" handleDismiss={this.handleDismiss}>
        <s.Container>
          <ShadowBox>
            <s.TitleWithBar title="치아 교정병원을 선택하는 가장 객관적인 기준" />
            <Editor
              readOnly
              editorState={this.state.content}
              onChange={this.muteChange}
            />
          </ShadowBox>
        </s.Container>
        <s.Link>검색 바로가기</s.Link>
      </Section>
    );
  }

  private handleDismiss = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    this.props.history.push('/');
  };

  private muteChange = (editorState: EditorState) => null;
}

export default About;
