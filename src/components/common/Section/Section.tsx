import React, { ReactNode } from 'react';
import * as s from './Section.styled';

interface Props {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const Section: React.SFC<Props> = ({ title, subtitle, children }) => (
  <s.Section>
    <s.Container>
      <s.Header>
        <s.HalfRound />
        <s.Title>{title}</s.Title>
        {subtitle && <s.SubTitle>{subtitle}</s.SubTitle>}
      </s.Header>
      {children}
    </s.Container>
  </s.Section>
);

export default Section;
