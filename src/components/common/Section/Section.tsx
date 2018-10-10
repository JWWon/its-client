import React, { ReactNode } from 'react';
import * as s from './Section.styled';

interface Props {
  title: string;
  children: ReactNode;
}

const Section: React.SFC<Props> = ({ title, children }) => (
  <s.Section>
    <s.Container>
      <s.Header>
        <s.HalfRound />
        <s.Title>{title}</s.Title>
      </s.Header>
      {children}
    </s.Container>
  </s.Section>
);

export default Section;
