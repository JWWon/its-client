/* tslint:disable:no-unused-expression */
import { TitleWithBar } from 'components/common';
import React, { Component } from 'react';
import * as s from './Address.styled';

interface Props {
  handleChange: (e: React.FormEvent<HTMLInputElement> | string) => void;
}

interface State {
  postalCode: string;
  fullAddress: string;
}

const { daum } = window;

class Address extends Component<Props, State> {
  public state: State = { postalCode: '우편번호', fullAddress: '' };

  public render() {
    return (
      <s.Content>
        <TitleWithBar title="병원 주소" />
        <s.InputWrapper>
          <s.Short>
            <s.Input
              placeholder="우편번호"
              value={this.state.postalCode}
              disabled
            />
            <s.Button onClick={this.getAddress}>우편번호 찾기</s.Button>
          </s.Short>
        </s.InputWrapper>
        <s.InputWrapper>
          <s.Short>
            <s.Input
              placeholder="기본주소"
              value={this.state.fullAddress}
              disabled
            />
          </s.Short>
          <s.DetailInput placeholder="상세주소" />
        </s.InputWrapper>
      </s.Content>
    );
  }

  private getAddress = () => {
    new daum.Postcode({
      oncomplete: (data: any) => {
        let fullAddress: string = '';
        let extraAddress: string = '';

        if (data.userSelectedType === 'R') {
          // 사용자가 도로명 주소를 선택했을 경우
          fullAddress = data.roadAddress;
        } else {
          // 사용자가 지번 주소를 선택했을 경우(J)
          fullAddress = data.jibunAddress;
        }

        if (data.userSelectedType === 'R') {
          // 법정동명이 있을 경우 추가한다.
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          // 건물명이 있을 경우 추가한다.
          if (data.buildingName !== '') {
            extraAddress +=
              extraAddress !== ''
                ? ', ' + data.buildingName
                : data.buildingName;
          }
          // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
          fullAddress += extraAddress !== '' ? ' (' + extraAddress + ')' : '';
        }

        this.setState({ postalCode: data.zonecode, fullAddress });
      },
    }).open();
  };
}

export default Address;
