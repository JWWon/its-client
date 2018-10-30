import { Dismiss } from 'components/common';
import React, { ReactNode } from 'react';
import * as s from './Section.styled';

interface Title {
  title?: string;
  subtitle?: string | null;
  handleDismiss?: (e: React.FormEvent<HTMLDivElement>) => void;
}

interface Props extends Title {
  children: ReactNode;
  banner?: ReactNode;
}

const Header: React.SFC<Title> = ({ title, subtitle, handleDismiss }) =>
  title ? (
    <>
      <s.Bar />
      <s.Header>
        <s.HalfRound />
        <s.Title>{title}</s.Title>
        {subtitle && <s.SubTitle>{subtitle}</s.SubTitle>}
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
}) => (
  <s.Section>
    <s.Container>
      <Header title={title} subtitle={subtitle} handleDismiss={handleDismiss} />
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
