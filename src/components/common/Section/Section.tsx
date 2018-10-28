import { Dismiss } from 'components/common';
import React, { ReactNode } from 'react';
import * as s from './Section.styled';

interface Props {
  children: ReactNode;
  title?: string;
  subtitle?: string | null;
  handleDismiss?: (e: React.FormEvent<HTMLDivElement>) => void;
}

const Section: React.SFC<Props> = ({
  title,
  subtitle,
  children,
  handleDismiss,
}) => (
  <s.Section>
    <s.Container>
      {title && (
        <>
          <s.Bar />
          <s.Header>
            <s.HalfRound />
            <s.Title>{title}</s.Title>
            {subtitle && <s.SubTitle>{subtitle}</s.SubTitle>}
            {handleDismiss && <Dismiss handleDismiss={handleDismiss} />}
          </s.Header>
        </>
      )}
      {children}
    </s.Container>
  </s.Section>
);

Section.defaultProps = {
  subtitle: null,
};

export default Section;
