// tslint:disable:no-console
import { RawDraftContentState } from 'draft-js';
import _ from 'lodash';
import draftToHtml from 'draftjs-to-html';
import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser';
import React from 'react';
import { isMobile } from 'react-device-detect';

import * as s from './Viewer.styled';

interface Props {
  content: RawDraftContentState;
}

class EditorWrapper extends React.PureComponent<Props> {
  render() {
    const html = draftToHtml(this.props.content);
    const options = { transform: this.transform };
    return <s.Container>{ReactHtmlParser(html, options)}</s.Container>;
  }

  transform = (node, index) => {
    if (node.name === 'p' && node.type === 'tag') {
      if (node.children.length > 0) {
        node.name = 'div';
        return convertNodeToElement(node, index, this.transform);
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
          <s.Image
            ref={e => {
              this[`image_${index}`] = e;
            }}
            src={src}
            onLoad={({ target }) => this.handleLoad(target, index)}
            styles={styles}
          />
        </s.ImgContainer>
      );
    }
  };

  handleLoad = (target, index) => {
    const { offsetWidth, offsetHeight } = target;
    if (isMobile) {
      this[`image_${index}`].style.width = '100%';
      this[`image_${index}`].style.height = `${(offsetHeight / offsetWidth) *
        100}%`;
    }
  };
}

export default EditorWrapper;
