import AWS from 'aws-sdk';
import { Section } from 'components/common';
import produce from 'immer';
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { register, RegistrationInterface } from 'api/registration';
import Input from './Input';
import InputAddress from './InputAddress';
import InputImage from './InputImage';
import * as s from './Registration.styled';

interface Props extends RouteComponentProps<any> {}

interface State extends RegistrationInterface {
  file: File | null;
}

class Apply extends Component<Props, State> {
  public state: State = {
    name: '',
    phone: '',
    address: '',
    manager: {
      name: '',
      phone: '',
      email: '',
    },
    certificates: {
      specialist: '',
    },
    file: null,
  };

  public render() {
    return (
      <Section
        title="병원 등록자격 확인하기"
        handleDismiss={this.handleDismiss}>
        <s.Form onSubmit={this.handleSubmit}>
          <s.ShadowBox>
            <Input
              label="병원명"
              placeholder="OOO 치과"
              name="name"
              handleChange={this.handleChange}
            />
            <Input
              label="병원 연락처"
              placeholder="02-000-1111"
              name="phone"
              handleChange={this.handleChange}
            />
            <InputAddress handleChange={this.handleChange} />
          </s.ShadowBox>
          <s.ShadowBox>
            <Input
              label="담당자 이름"
              placeholder="담당자 이름을 입력해주세요"
              name="name"
              handleChange={this.handleManagerChange}
            />
            <Input
              label="담당자 연락처"
              placeholder="010-1234-5678"
              name="phone"
              handleChange={this.handleManagerChange}
            />
            <Input
              label="담당자 이메일"
              placeholder="contact@hospital.com"
              name="email"
              handleChange={this.handleManagerChange}
            />
          </s.ShadowBox>
          <s.ShadowBox>
            <InputImage
              label="치과교정전문의 자격증 첨부"
              name="specialist"
              handleImageChange={this.handleImageChange}
            />
          </s.ShadowBox>

          <s.ButtonWrapper>
            <s.Submit>신청하기</s.Submit>
          </s.ButtonWrapper>
        </s.Form>
      </Section>
    );
  }

  private handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    this.setState(prevState => ({ ...prevState, [name]: value }));
  };

  private handleManagerChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    this.setState(state =>
      produce(state, draft => {
        draft.manager[name] = value;
      })
    );
  };

  private handleImageChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    if (files && files.length) {
      const file = files[0];
      this.setState({ file });
    }
  };

  private handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { file } = this.state;
    if (file) await this.uploadImage(file);

    const nextState = this.state;
    delete nextState.file;
    register(nextState);
  };

  private handleDismiss = (e: React.FormEvent<HTMLDivElement>) => {
    this.props.history.goBack();
  };

  private uploadImage = (file: File) =>
    new Promise((resolve, reject) => {
      const bucket = new AWS.S3();
      const params = {
        Bucket: process.env.REACT_APP_AWS_S3_BUCKET_NAME || '',
        Key: `registerations/${this.state.name}/${file.name}`,
        ContentType: file.type,
        Body: file,
        ACL: 'public-read',
      };

      bucket
        .upload(params)
        .on('httpUploadProgress', evt => {
          console.log((evt.loaded * 100) / evt.total);
        })
        .send(async (e: any, data: { Location: string }) => {
          if (e) throw e;
          const specialist = data.Location;

          await this.setState(state =>
            produce(state, draft => {
              draft.certificates.specialist = specialist;
            })
          );
          resolve(specialist);
        });
    });
}

export default Apply;
