import { Section } from 'components/common';
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Address from './Address';
import * as s from './Apply.styled';
import Input from './Input';

interface Props extends RouteComponentProps<any> {}

interface State {
  name: string;
  phone: string;
  address: string;
  manager: string;
  email: string;
}

class Apply extends Component<Props, State> {
  public state: State = {
    name: '',
    phone: '',
    address: '',
    manager: '',
    email: '',
  };

  public render() {
    return (
      <Section title="병원 입점 신청하기" handleDismiss={this.handleDismiss}>
        <form onSubmit={this.handleSubmit}>
          <s.ShadowBox>
            <Input
              title="병원명"
              meta={{ placeholder: '병원명', type: 'text', name: 'name' }}
              handleChange={this.handleChange}
            />
            <Input
              title="병원 연락처"
              meta={{ placeholder: '02-123-4567', type: 'tel', name: 'phone' }}
              handleChange={this.handleChange}
            />
            <Address handleChange={this.handleChange} />
          </s.ShadowBox>
          <s.ShadowBox>
            <Input
              title="담당자 이름"
              meta={{ placeholder: '이름', type: 'text', name: 'manager' }}
              handleChange={this.handleChange}
            />
            <Input
              title="담당자 연락처"
              meta={{
                placeholder: '010-1234-5678',
                type: 'tel',
                name: 'phone',
              }}
              handleChange={this.handleChange}
            />
            <Input
              title="담당자 이메일"
              meta={{
                placeholder: 'example@its.com',
                type: 'email',
                name: 'email',
              }}
              handleChange={this.handleChange}
            />
          </s.ShadowBox>
          <s.ShadowBox>
            <div>자격증 첨부 영역</div>
          </s.ShadowBox>
          <s.ButtonWrapper>
            <s.Submit>신청하기</s.Submit>
          </s.ButtonWrapper>
        </form>
      </Section>
    );
  }

  private handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    this.setState(prevState => ({ ...prevState, [name]: value }));
  };

  private handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.state);
  };

  private handleDismiss = (e: React.FormEvent<HTMLDivElement>) => {
    this.props.history.goBack();
  };
}

export default Apply;
