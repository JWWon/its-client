/* tslint:disable:jsx-no-lambda */
import React, { Component, ReactNodeArray } from 'react';

import { Section } from 'components/common';
import * as s from './Home.styled';
import Slide from './Slide';

class Home extends Component {
  public render() {
    const urls = [
      'http://post.phinf.naver.net/MjAxODEwMDVfMjQg/MDAxNTM4NzQ2MjE2OTIx.m0yrQuJzpFatCD3NpB8d09dkjZcyzprTn0hdQUh0COog.MeFjpsYcdihxs9xl2zvfiEso1Jqu-8j2lOK2ulX3Lawg.JPEG/I9kEIxEyIto2VI7ZMFmUO4WfnisE.jpg',
      'http://post.phinf.naver.net/MjAxODA5MDZfNDgg/MDAxNTM2MjEyNDI0NjQ4.1iDQIU9DzxPqDGr-62CaE54CIiuXvn_Bfggm_5DRPm8g.F35HFnXMcSgWIGw3Krb3d2xqgXz-F8vwMBnP5Riy0l8g.JPEG/IvEnu9ym-r5HyTb04lG1ChoBGClM.jpg',
      'https://movie-phinf.pstatic.net/20180921_296/1537498027382AK7eg_JPEG/movie_image.jpg',
    ];
    return (
      <>
        <s.Slider
          prevArrow={<s.HideArrow />}
          nextArrow={<s.HideArrow />}
          appendDots={(dots: ReactNodeArray) => (
            <s.DotsWrapper>
              <div>
                <s.ArrayGray />
                <ul>{dots}</ul>
                <s.ArrayGray style={{ transform: 'rotate(180deg)' }} />
              </div>
            </s.DotsWrapper>
          )}>
          {urls.map((url, index) => (
            <Slide key={index} url={url} />
          ))}
        </s.Slider>
        <Section title="'잇츠 교정'이란?">
          <s.SectionWrapper>
            <div>
              <s.SubTitle>
                치아교정병원을 선택하는 가장 객관적인 기준
              </s.SubTitle>
              <s.Context>
                잇츠교정은 치과교정과전문의에 의해 설립된 병원만을 선별하여,
                <br />
                치아교정치료중 발생되는 많은 문제를 해결하기 위해
                만들어졌습니다.
              </s.Context>
              <s.MoreButton>
                <p>더보기</p>
                <s.ArrowBlue />
              </s.MoreButton>
            </div>
          </s.SectionWrapper>
        </Section>
        <Section title="왜 '잇츠 교정'인가?">
          <div>
            <p>this is home</p>
          </div>
        </Section>
      </>
    );
  }
}

export default Home;
