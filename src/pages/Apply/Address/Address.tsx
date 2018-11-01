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
  detailAddress: string;
}

const { daum } = window;

class Address extends Component<Props, State> {
  public state: State = {
    postalCode: '',
    fullAddress: '',
    detailAddress: '',
  };

  private detailInput: React.RefObject<HTMLInputElement> = React.createRef<
    HTMLInputElement
  >();

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
              onChange={this.handleChange}
              disabled
            />
          </s.Short>
          <s.DetailInput
            ref={(e: any) => (this.detailInput = e)}
            value={this.state.detailAddress}
            name="detailAddress"
            onChange={this.handleChange}
            placeholder="상세주소"
          />
        </s.InputWrapper>
      </s.Content>
    );
  }

  private getAddress = () => {
    new daum.Postcode({
      oncomplete: (data: any) => {
        let fullAddress: string = '';
        let extra: string = '';

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
            extra += data.bname;
          }
          // 건물명이 있을 경우 추가한다.
          if (data.buildingName !== '') {
            extra +=
              extra !== '' ? ', ' + data.buildingName : data.buildingName;
          }
          // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
          fullAddress += extra !== '' ? ' (' + extra + ')' : '';
        }

        this.setState({ postalCode: data.zonecode, fullAddress });
        if (this.detailInput.current) this.detailInput.current.focus();
      },
    }).open();
  };

  private handleChange = async (e: React.FormEvent<HTMLInputElement>) => {
    e.persist();
    const { name, value } = e.currentTarget;
    await this.setState(prevState => ({ ...prevState, [name]: value }));

    const { fullAddress, detailAddress } = this.state;
    const event: React.FormEvent<HTMLInputElement> = {
      ...e,
      currentTarget: {
        ...e.currentTarget,
        name: 'address',
        value: `${fullAddress} ${detailAddress}`,
      },
    };

    this.props.handleChange(event);
  };
}

export default Address;
