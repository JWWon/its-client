import React, { ReactNode } from 'react';
import * as s from './Section.styled';

interface Props {
  title: string;
  subtitle?: string | null;
  single?: boolean;
  children: ReactNode;
}

const Section: React.SFC<Props> = ({ title, subtitle, single, children }) => (
  <s.Section single={single}>
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

Section.defaultProps = {
  subtitle: null,
  single: false,
};

export default Section;
