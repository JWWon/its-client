import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ClinicInterface } from 'api/clinic';
import { Section } from 'components/common';
import * as s from './Clinic.styled';

interface TextInterface {
  label: string;
  content: string;
}

interface Props extends RouteComponentProps<any> {}

const TextRow: React.SFC<TextInterface> = ({ label, content }) => (
  <s.TextRowWrapper>
    <s.Label>{label}</s.Label>
    <s.Content>{content}</s.Content>
  </s.TextRowWrapper>
);

class Clinic extends Component<Props> {
  public render() {
    const clinic: ClinicInterface = this.props.location.state;
    return (
      <Section title={clinic.name} handleDismiss={this.handleDismiss}>
        <s.ShadowBox>
          <s.DivideHalf>
            <s.Half>
              <s.TitleWithBar title="병원 정보" />
              <TextRow
                label="전화번호"
                content={clinic.phone || '010-0000-0000'}
              />
              <TextRow
                label="주소"
                content={
                  clinic.address || '서울 강남구 논현로171길 15 카로시티 5층'
                }
              />
              <TextRow
                label="가까운 곳"
                content={clinic.landmark || '2호선 삼성역'}
              />
              <TextRow
                label="홈페이지"
                content={clinic.webpage || 'http://www.varomdental.co.kr/'}
              />
            </s.Half>
            <s.Half>
              <p>hello</p>
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
        </s.ShadowBox>
      </Section>
    );
  }

  private handleDismiss = (e: React.FormEvent<HTMLDivElement>) => {
    this.props.history.goBack();
  };
}

export default Clinic;
