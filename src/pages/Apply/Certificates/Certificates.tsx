import { TitleWithBar } from 'components/common';
import React, { Component } from 'react';
import * as s from './Certificates.styled';

class Certificates extends Component {
  public render() {
    return (
      <s.Content>
        <TitleWithBar title="자격증 첨부" />
      </s.Content>
    );
  }
}

export default Certificates;
