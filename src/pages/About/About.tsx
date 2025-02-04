import Viewer from 'components/common/Viewer';
import { convertToRaw, EditorState } from 'draft-js';
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Content as ContentInterface, getContent } from 'api/meta';
import { Section, ShadowBox } from 'components/common';
import * as s from './About.styled';

class About extends Component<RouteComponentProps, ContentInterface> {
  public state = {
    content: convertToRaw(EditorState.createEmpty().getCurrentContent()),
  };

  public async componentDidMount() {
    const response = await getContent();
    this.setState({ content: response.content });
  }

  public render() {
    return (
      <Section title="잇츠교정이란?" handleDismiss={this.handleDismiss}>
        <s.Container>
          <ShadowBox>
            <s.TitleWithBar title="치아 교정병원을 선택하는 가장 객관적인 기준" />
            <Viewer content={this.state.content} />
          </ShadowBox>
        </s.Container>
        <s.Link>잇츠교정 치과찾기</s.Link>
      </Section>
    );
  }

  private handleDismiss = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    this.props.history.push('/');
  };
}

export default About;
