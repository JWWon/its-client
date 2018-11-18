import { moment } from 'lib/functions/moment';
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ClinicInterface } from 'api/clinic';
import { Section } from 'components/common';
import * as s from './Clinic.styled';
import DaumMap from './DaumMap';

interface TextInterface {
  readonly label: string;
  readonly content: string;
}

interface State {
  readonly info: { [label: string]: string };
  readonly specialist: { [label: string]: string };
}

const TextWithButton: React.SFC<TextInterface> = ({ label, content }) => (
  <s.TextWrapper>
    <s.Label>{label}</s.Label>
    <a href={`${label === '전화번호' ? 'tel:' : ''}${content}`}>
      <s.Content>{content}</s.Content>
    </a>
  </s.TextWrapper>
);

const TextRow: React.SFC<TextInterface> = ({ label, content }) => (
  <s.TextWrapper>
    <s.Label>{label}</s.Label>
    <s.Content>{content}</s.Content>
  </s.TextWrapper>
);

class Clinic extends Component<RouteComponentProps, State> {
  public constructor(props: RouteComponentProps) {
    super(props);
    const clinic: ClinicInterface = props.location.state;
    const { specialist } = clinic.certificates;

    this.state = {
      info: {
        전화번호: clinic.phone,
        주소: clinic.address,
        '가까운 곳': clinic.landmark,
        홈페이지: clinic.webpage,
      },
      specialist: {
        병원장: specialist.chief,
        자격증명: '치과교정전문의',
        수련기관: specialist.school,
        수련기간: `${moment(specialist.period.startAt)} - ${moment(
          specialist.period.endAt
        )}`,
      },
    };
  }

  public render() {
    const clinic: ClinicInterface = this.props.location.state;
    const { info, specialist } = this.state;

    return (
      <Section title={clinic.name} handleDismiss={this.handleDismiss}>
        <s.ShadowBox>
          <s.TitleWithBar title="전문의 자격증" />
          <s.SepcialistWrapper>
            <s.Image
              url={
                specialist.image ||
                'https://media.vanityfair.com/photos/56e6ca9c4cac3c8266605125/master/w_768,c_limit/charlie-puth-feud.jpg'
              }
              onClick={this.handleClickImg}
            />
            <s.FlexOne>
              {Object.keys(specialist).map(key => (
                <TextRow label={key} content={specialist[key]} key={key} />
              ))}
            </s.FlexOne>
          </s.SepcialistWrapper>
        </s.ShadowBox>

        <s.ShadowBox>
          <s.InfoWrapper>
            <s.FlexOne>
              <s.TitleWithBar title="병원 정보" />
              {Object.keys(info).map(key =>
                key === '전화번호' || key === '홈페이지' ? (
                  <TextWithButton label={key} content={info[key]} key={key} />
                ) : (
                  <TextRow label={key} content={info[key]} key={key} />
                )
              )}
            </s.FlexOne>
            <s.FlexOne>
              <DaumMap address={clinic.address} />
            </s.FlexOne>
          </s.InfoWrapper>
        </s.ShadowBox>
        <s.ShadowBox>
          <s.TitleWithBar title="진료 시간" />
          {clinic.timetable &&
            Object.keys(clinic.timetable).map(key => (
              <TextRow label={key} content={clinic.timetable[key]} key={key} />
            ))}
        </s.ShadowBox>

        <s.ShadowBox>
          <s.TitleWithBar title="찾아 오시는 길" />
          {clinic.directions &&
            Object.keys(clinic.directions).map(key => (
              <TextRow label={key} content={clinic.directions[key]} key={key} />
            ))}
        </s.ShadowBox>
        <a href={`tel:${clinic.phone}`}>
          <s.PhoneButton>
            <s.PhoneIcon />
          </s.PhoneButton>
        </a>
      </Section>
    );
  }

  private handleClickImg = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  private handleDismiss = (e: React.FormEvent<HTMLDivElement>) => {
    this.props.history.goBack();
  };
}

export default Clinic;
