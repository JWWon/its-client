import React, { Component } from 'react';

import { Footer as FooterInterface, getFooter } from 'api/meta';
import { Logo } from 'components/common';
import { isMobile } from 'react-device-detect';
import * as s from './Footer.styled';

interface TextInterface {
  [title: string]: string;
}

class Footer extends Component<{}, FooterInterface> {
  public state: FooterInterface = {
    president: '',
    manager: '',
    registration: '',
    email: '',
    phone: '',
    address: '',
    social: {
      facebook: '',
      instagram: '',
      blog: '',
    },
  };

  public async componentDidMount() {
    const response = await getFooter();
    this.setState({ ...this.state, ...response });
  }

  public render() {
    const {
      president,
      manager,
      registration,
      email,
      phone,
      address,
      social,
    } = this.state;
    return (
      <s.Container>
        <div>
          <s.Header>
            <Logo />
            <s.Copyright>
              <s.InfoText>© 2018 잇츠교정</s.InfoText>
            </s.Copyright>
          </s.Header>
          {isMobile ? (
            this.TextBundle({
              대표: president,
              관리자: manager,
              사업자번호: registration,
              이메일: email,
              연락처: phone,
              주소: address,
            })
          ) : (
            <>
              {this.TextBundle({
                대표: president,
                관리자: manager,
                사업자번호: registration,
              })}
              {this.TextBundle({ 이메일: email, 연락처: phone })}
              {this.TextBundle({ 주소: address })}
            </>
          )}
        </div>
        <s.Right>
          <s.Header>
            <s.Link href={social.facebook}>
              <s.Facebook />
            </s.Link>
            <s.Link href={social.instagram}>
              <s.Instagram />
            </s.Link>
            <s.Link href={social.blog}>
              <s.Blog />
            </s.Link>
          </s.Header>
          <s.Button to="/registeration">
            <p>병원 등록자격 확인하기</p>
          </s.Button>
        </s.Right>
      </s.Container>
    );
  }

  private TextBundle = (bundle: TextInterface) => (
    <s.TextWrapper>
      {Object.keys(bundle).map(key => (
        <s.InfoText key={key}>
          <span>{key}</span> {bundle[key]}
        </s.InfoText>
      ))}
    </s.TextWrapper>
  );
}

export default Footer;
