import { ClinicInterface } from 'api/clinic';
import React, { Component } from 'react';

import { ShadowBox, TitleWithBar } from 'components/common';
import * as s from './Result.styled';

interface SertifInterface extends s.SertifInterface {
  name: string;
}

interface Props {
  clinic: ClinicInterface;
}

const Sertif: React.SFC<SertifInterface> = ({ name, type, active }) => (
  <s.SertifWrapper>
    <s.SertifIcon type={type} active={active} />
    <s.SertifText active={active}>{name}</s.SertifText>
  </s.SertifWrapper>
);

class Result extends Component<Props> {
  public render() {
    const { clinic } = this.props;
    console.log(clinic);
    return (
      <s.Container>
        <ShadowBox>
          <s.Wrapper>
            <s.LeftContent>
              <s.HrContent>
                <TitleWithBar title={clinic.name} margin="0" />
                <s.Icon />
                <s.Landmark>{clinic.landmark || '2호선 삼성역'}</s.Landmark>
              </s.HrContent>
              <s.HrContent>
                <s.Phone>{clinic.phone || '010-0000-0000'}</s.Phone>
                <s.Address>
                  {clinic.address || '서울 강남구 논현로171길 15 카로시티 5층'}
                </s.Address>
              </s.HrContent>
            </s.LeftContent>
            <Sertif name="치과교정과전문의" type="specialist" active />
            <Sertif name="대한치과교정학회" type="association" />
            <Sertif name="인비절라인인증의" type="invisalign" active />
          </s.Wrapper>
        </ShadowBox>
      </s.Container>
    );
  }
}

export default Result;
