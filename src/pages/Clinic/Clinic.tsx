import produce from 'immer';
import { moment } from 'lib/functions/moment';
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ClinicInterface } from 'api/clinic';
import { Section } from 'components/common';
import * as s from './Clinic.styled';
import DaumMap from './DaumMap';

interface ObjectInterface {
  object: { [key: string]: string };
}

interface State {
  readonly name: string;
  readonly address: string;
  readonly phone: string;
  readonly image: string;
  readonly timetable: { [key: string]: string };
  readonly directions: { [key: string]: string };
  readonly info: { [key: string]: string };
  readonly specialist: { [key: string]: string };
}

const RenderObject: React.SFC<ObjectInterface> = ({ object }) => (
  <>
    {Object.keys(object).map(key => {
      const content = object[key];
      return (
        <s.TextWrapper key={key}>
          <s.Label>{key}</s.Label>
          {key === '전화번호' ? (
            <a href={`tel:${content}`}>
              <s.Content>{content}</s.Content>
            </a>
          ) : (
            <s.Content>{content}</s.Content>
          )}
        </s.TextWrapper>
      );
    })}
  </>
);

class Clinic extends Component<RouteComponentProps, State> {
  public state: State = {
    name: '',
    address: '',
    phone: '',
    image: '',
    timetable: {},
    directions: {},
    info: {},
    specialist: {},
  };

  public async componentDidMount() {
    const clinic: ClinicInterface = this.props.location.state;
    const {
      name,
      phone,
      address,
      landmark,
      webpage,
      certificates,
      timetable,
      directions,
    } = clinic;

    this.setState(state =>
      produce(state, draft => {
        draft.name = name;
        draft.address = address;
        draft.phone = phone;
        draft.image = certificates.specialist.image;

        draft.timetable = timetable;
        draft.directions = directions;
        draft.info = {
          전화번호: phone,
          주소: address,
          '가까운 곳': landmark,
          홈페이지: webpage,
        };
        draft.specialist = {
          병원장: certificates.specialist.chief,
          자격증명: '치과교정전문의',
          수련기관: certificates.specialist.school,
          수련기간: `${moment(
            certificates.specialist.period.startAt
          )} - ${moment(certificates.specialist.period.endAt)}`,
        };
      })
    );
  }

  public render() {
    const {
      name,
      info,
      image,
      specialist,
      timetable,
      address,
      directions,
    } = this.state;

    return (
      <Section title={name} handleDismiss={this.handleDismiss}>
        {specialist && (
          <s.ShadowBox>
            <s.TitleWithBar title="전문의 자격증" />
            <s.SepcialistWrapper>
              {image && <s.Image url={image} onClick={this.handleClickImg} />}
              <s.FlexOne>
                <RenderObject object={specialist} />
              </s.FlexOne>
            </s.SepcialistWrapper>
          </s.ShadowBox>
        )}

        {info && (
          <s.ShadowBox>
            <s.InfoWrapper>
              <s.FlexOne>
                <s.TitleWithBar title="병원 정보" />
                <RenderObject object={info} />
              </s.FlexOne>
              <s.FlexOne>{address && <DaumMap address={address} />}</s.FlexOne>
            </s.InfoWrapper>
          </s.ShadowBox>
        )}

        {timetable && (
          <s.ShadowBox>
            <s.TitleWithBar title="진료 시간" />
            <RenderObject object={timetable} />
          </s.ShadowBox>
        )}

        {directions && (
          <s.ShadowBox>
            <s.TitleWithBar title="찾아 오시는 길" />
            <RenderObject object={directions} />
          </s.ShadowBox>
        )}

        <a href={`tel:${this.state.phone}`}>
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
