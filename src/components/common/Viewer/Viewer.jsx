import { RawDraftContentState } from 'draft-js';
import _ from 'lodash';
import draftToHtml from 'draftjs-to-html';
import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser';
import React from 'react';
import * as s from './Viewer.styled';

interface Props {
  content: RawDraftContentState;
}

const transform = (node, index) => {
  if (node.name === 'p' && node.type === 'tag') {
    if (node.children.length > 0) {
      node.name = 'div';
      return convertNodeToElement(node, index, transform);
    } else {
      return <br key={index} />;
    }
  }
  if (node.name === 'img') {
    const { style, src } = node.attribs;
    const styleObject = {};
    _.forEach(style.split(';'), item => {
      const arr = item.split(':');
      styleObject[arr[0]] = arr[1].trim();
    });
    const { float, ...styles } = styleObject;

    return (
      <s.ImgContainer key={index} float={float}>
        <s.Image src={src} styles={styles} />
      </s.ImgContainer>
    );
  }
};

const EditorWrapper: React.SFC<Props> = ({ content }) => {
  const html = draftToHtml(content);
  const options = { transform };
  return <s.Container>{ReactHtmlParser(html, options)}</s.Container>;
};

export default EditorWrapper;
