import React from 'react';
import * as s from './Notice.styled';

interface Item {
  src: string;
  title: string;
  content: string;
  url: string;
}

interface Props {
  list: Item[];
}

const Notice: React.SFC<Props> = ({ list }) => (
  <s.Container>
    {list.map(item => (
      <s.Item key={item.title}>
        <s.Image src={item.src} />
        <s.TitleWrapper>
          <s.HrBar />
          <s.Title>{item.title}</s.Title>
        </s.TitleWrapper>
        <p>{item.content}</p>
      </s.Item>
    ))}
  </s.Container>
);

export default Notice;
