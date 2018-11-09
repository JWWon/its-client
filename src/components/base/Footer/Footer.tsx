import React, { Component } from 'react';

import { getMeta, Meta as MetaInterface } from 'api/meta';
import { Logo } from 'components/common';
import mobile from 'theme/mobile';
import * as s from './Footer.styled';

interface TextInterface {
  [title: string]: string;
}

class Footer extends Component<{}, MetaInterface> {
  public state: MetaInterface = {
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
    content: '',
  };

  public async componentDidMount() {
    const response = await getMeta();
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
          {mobile ? (
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
              <s.Twitter />
            </s.Link>
          </s.Header>
          <s.Button to="/apply">
            <p>병원 입점 신청하기</p>
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
