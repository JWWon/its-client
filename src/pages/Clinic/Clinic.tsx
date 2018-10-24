import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ClinicInterface } from 'api/clinic';
import { Section } from 'components/common';
import * as s from './Clinic.styled';
import NaverMap from './NaverMap';

interface TextInterface {
  label: string;
  content: string;
}

interface Props extends RouteComponentProps<any> {}

interface State {
  info: { [label: string]: string };
  certif: { [label: string]: string };
  direction: { [label: string]: string };
}

const TextRow: React.SFC<TextInterface> = ({ label, content }) => (
  <s.TextRowWrapper>
    <s.Label>{label}</s.Label>
    <s.Content>{content}</s.Content>
  </s.TextRowWrapper>
);

class Clinic extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    const clinic: ClinicInterface = props.location.state;

    this.state = {
      info: {
        전화번호: clinic.phone || '010-0000-0000',
        주소: clinic.address || '서울 강남구 논현로171길 15 카로시티 5층',
        '가까운 곳': clinic.landmark || '2호선 삼성역',
        홈페이지: clinic.webpage || 'http://www.varomdental.co.kr/',
      },
      certif: {},
      direction: {},
    };
  }

  public render() {
    const clinic: ClinicInterface = this.props.location.state;
    const { info } = this.state;
    return (
      <Section title={clinic.name} handleDismiss={this.handleDismiss}>
        <s.ShadowBox>
          <s.DivideHalf>
            <s.Half>
              <s.TitleWithBar title="병원 정보" />
              {Object.keys(info).map(key => (
                <TextRow label={key} content={info[key]} key={key} />
              ))}
            </s.Half>
            <s.Half>
              <NaverMap />
            </s.Half>
          </s.DivideHalf>
        </s.ShadowBox>
        <s.ShadowBox>
          <s.TitleWithBar title="진료 시간" />
          {clinic.timetable &&
            Object.keys(clinic.timetable).map(key => (
              <TextRow label={key} content={clinic.timetable[key]} key={key} />
            ))}
        </s.ShadowBox>
        <s.ShadowBox>
          <s.TitleWithBar title="전문의 자격증" />
        </s.ShadowBox>
        <s.ShadowBox>
          <s.TitleWithBar title="찾아 오시는 길" />
          {clinic.directions &&
            Object.keys(clinic.directions).map(key => (
              <TextRow label={key} content={clinic.directions[key]} key={key} />
            ))}
        </s.ShadowBox>
      </Section>
    );
  }

  private handleDismiss = (e: React.FormEvent<HTMLDivElement>) => {
    this.props.history.goBack();
  };
}

export default Clinic;
