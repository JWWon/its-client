import React, { ReactNode } from 'react';
import ReactHtmlParser from 'react-html-parser';

import { Dismiss } from 'components/common';
import * as s from './Section.styled';

interface Title {
  title?: string;
  subtitle?: string | null;
  massive?: boolean;
  linkTo?: string;
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
  linkTo,
  massive,
}) =>
  title ? (
    <>
      <s.Bar />
      <s.Header>
        <s.HalfRound />
        {linkTo ? (
          <s.Link to={linkTo}>
            <s.Title massive={massive}>{title}</s.Title>
            {subtitle && <s.SubTitle>{ReactHtmlParser(subtitle)}</s.SubTitle>}
          </s.Link>
        ) : (
          <>
            <s.Title massive={massive}>{title}</s.Title>
            {subtitle && <s.SubTitle>{ReactHtmlParser(subtitle)}</s.SubTitle>}
          </>
        )}
        {handleDismiss && <Dismiss handleDismiss={handleDismiss} />}
      </s.Header>
    </>
  ) : null;

const Section: React.SFC<Props> = ({
  children,
  title,
  subtitle,
  banner,
  linkTo,
  handleDismiss,
  massive,
}) => (
  <s.Section>
    <s.Container>
      <Header
        title={title}
        subtitle={subtitle}
        handleDismiss={handleDismiss}
        linkTo={linkTo}
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
  linkTo: '',
};

export default Section;
