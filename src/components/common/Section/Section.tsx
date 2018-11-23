import { Dismiss } from 'components/common';
import React, { ReactNode } from 'react';
import ReactHtmlParser from 'react-html-parser';
import * as s from './Section.styled';

interface Title {
  title?: string;
  subtitle?: string | null;
  massive?: boolean;
  handleDismiss?: (e: React.FormEvent<HTMLDivElement>) => void;
}

interface Props extends Title {
  children: ReactNode;
  banner?: ReactNode;
}

const Header: React.SFC<Title> = ({
  title,
  subtitle,
  handleDismiss,
  massive,
}) =>
  title ? (
    <>
      <s.Bar />
      <s.Header>
        <s.HalfRound />
        <s.Title massive={massive}>{title}</s.Title>
        {subtitle && <s.SubTitle>{ReactHtmlParser(subtitle)}</s.SubTitle>}
        {handleDismiss && <Dismiss handleDismiss={handleDismiss} />}
      </s.Header>
    </>
  ) : null;

const Section: React.SFC<Props> = ({
  children,
  title,
  subtitle,
  banner,
  handleDismiss,
  massive,
}) => (
  <s.Section>
    <s.Container>
      <Header
        title={title}
        subtitle={subtitle}
        handleDismiss={handleDismiss}
        massive={massive}
      />
      {banner && (
        <s.BannerArea>
          <s.BannerWrapper>
            <s.Container>{banner}</s.Container>
          </s.BannerWrapper>
        </s.BannerArea>
      )}
      {children}
    </s.Container>
  </s.Section>
);

Section.defaultProps = {
  subtitle: null,
  banner: null,
};

export default Section;
