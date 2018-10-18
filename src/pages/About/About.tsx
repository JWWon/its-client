import { Editor, EditorState } from 'draft-js';
import React, { Component } from 'react';

import { Section, ShadowBox, TitleWithBar } from 'components/common';
import * as s from './About.styled';

interface State {
  editorState: EditorState;
}

class About extends Component<{}, State> {
  public state = {
    editorState: EditorState.createEmpty(),
  };

  public render() {
    return (
      <Section title="잇츠교정이란?">
        <s.Container>
          <ShadowBox>
            <TitleWithBar
              title="치아 교정병원을 선택하는 가장 객관적인 기준"
              margin="0.8rem 0 4rem"
            />
            <Editor
              readOnly
              editorState={this.state.editorState}
              onChange={this.muteChange}
            />
          </ShadowBox>
        </s.Container>
        <s.Link>검색 바로가기</s.Link>
      </Section>
    );
  }

  private muteChange = (editorState: EditorState) => null;
}

export default About;
