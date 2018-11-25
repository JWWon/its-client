import { ClinicInterface } from 'api/clinic';
import React, { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { ShadowBox, TitleWithBar } from 'components/common';
import * as s from './Result.styled';

interface SertifInterface extends s.SertifInterface {
  name: string;
}

interface Props {
  clinic: ClinicInterface;
}

interface SwitchInterface extends Props {
  children: ReactNode;
}

const Sertif: React.SFC<SertifInterface> = ({ name, type, active }) => (
  <s.SertifWrapper>
    <s.SertifIcon type={type} active={active} />
    <s.SertifText active={active}>{name}</s.SertifText>
  </s.SertifWrapper>
);

const SwitchLink: React.SFC<SwitchInterface> = ({ clinic, children }) => {
  if (clinic.grade > -1) {
    return (
      <Link to={{ pathname: `/clinic/${clinic.id}`, state: clinic }}>
        {children}
      </Link>
    );
  }
  return <>{children}</>;
};

class Result extends Component<Props> {
  public render() {
    const { clinic } = this.props;
    const { image } = clinic.certificates.specialist;
    const isSpecialist = image ? image.length > 0 : false;

    return (
      <s.Container>
        <SwitchLink clinic={clinic}>
          <ShadowBox>
            <s.Wrapper>
              <s.LeftContent>
                <s.HrContent>
                  <TitleWithBar title={clinic.name} margin="0" />
                  <s.Icon />
                  <s.Landmark>{clinic.landmark}</s.Landmark>
                </s.HrContent>
                <s.HrContent>
                  <s.Phone>{clinic.phone}</s.Phone>
                  <s.Address>{clinic.address}</s.Address>
                </s.HrContent>
              </s.LeftContent>
              <Sertif
                name="치과교정과전문의"
                type="specialist"
                active={isSpecialist}
              />
              <Sertif
                name="대한치과교정학회"
                type="association"
                active={clinic.certificates.association}
              />
              <Sertif
                name="인비절라인인증의"
                type="invisalign"
                active={clinic.certificates.invisalign}
              />
            </s.Wrapper>
          </ShadowBox>
        </SwitchLink>
      </s.Container>
    );
  }
}

export default Result;
