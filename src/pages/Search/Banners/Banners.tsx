import React from 'react';
import { Link } from 'react-router-dom';

import { ClinicInterface } from 'api/clinic';
import { ShadowBox, TitleWithBar } from 'components/common';
import * as s from './Banners.styled';

interface Props {
  list: ClinicInterface[];
}

const Banner: React.SFC<ClinicInterface> = props => (
  <ShadowBox space="3.5rem">
    <Link to={{ pathname: `/clinic/${props.id}`, state: props }}>
      <s.BannerWrapper>
        <TitleWithBar title={props.name} margin="0" hideBar />
        <s.Footer>
          <s.Bar />
          <s.Icon />
          <s.Landmark>{props.landmark || '2호선 삼성역'}</s.Landmark>
        </s.Footer>
      </s.BannerWrapper>
    </Link>
  </ShadowBox>
);

const Banners: React.SFC<Props> = ({ list }) =>
  list.length > 0 ? (
    <s.Background>
      <s.Container>
        <s.BannerSection>
          {list.map(data => (
            <Banner {...data} key={data.id} />
          ))}
        </s.BannerSection>
        <s.Notice>* 배너에 표시되는 병원은 랜덤입니다</s.Notice>
      </s.Container>
    </s.Background>
  ) : null;

export default Banners;
