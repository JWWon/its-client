/* tslint:disable:jsx-no-lambda */
import React, { Component, ReactNodeArray } from 'react';

import { Section } from 'components/common';
import About from './About';
import * as s from './Home.styled';
import Notice from './Notice';
import Slide from './Slide';

const urls = [
  'http://post.phinf.naver.net/MjAxODEwMDVfMjQg/MDAxNTM4NzQ2MjE2OTIx.m0yrQuJzpFatCD3NpB8d09dkjZcyzprTn0hdQUh0COog.MeFjpsYcdihxs9xl2zvfiEso1Jqu-8j2lOK2ulX3Lawg.JPEG/I9kEIxEyIto2VI7ZMFmUO4WfnisE.jpg',
  'http://post.phinf.naver.net/MjAxODA5MDZfNDgg/MDAxNTM2MjEyNDI0NjQ4.1iDQIU9DzxPqDGr-62CaE54CIiuXvn_Bfggm_5DRPm8g.F35HFnXMcSgWIGw3Krb3d2xqgXz-F8vwMBnP5Riy0l8g.JPEG/IvEnu9ym-r5HyTb04lG1ChoBGClM.jpg',
  'https://movie-phinf.pstatic.net/20180921_296/1537498027382AK7eg_JPEG/movie_image.jpg',
];

const noticeList = [
  {
    src:
      'http://post.phinf.naver.net/MjAxODEwMDVfMjQg/MDAxNTM4NzQ2MjE2OTIx.m0yrQuJzpFatCD3NpB8d09dkjZcyzprTn0hdQUh0COog.MeFjpsYcdihxs9xl2zvfiEso1Jqu-8j2lOK2ulX3Lawg.JPEG/I9kEIxEyIto2VI7ZMFmUO4WfnisE.jpg',
    title: '왜 전문의어야 하는가?',
    content: '너무 졸립다. 집가고싶다. 정말로.',
    url: '/hello',
  },
  {
    src:
      'http://post.phinf.naver.net/MjAxODEwMDVfMjQg/MDAxNTM4NzQ2MjE2OTIx.m0yrQuJzpFatCD3NpB8d09dkjZcyzprTn0hdQUh0COog.MeFjpsYcdihxs9xl2zvfiEso1Jqu-8j2lOK2ulX3Lawg.JPEG/I9kEIxEyIto2VI7ZMFmUO4WfnisE.jpg',
    title: '왜 병원장이 전문의어야 하는가?',
    content: '너무 졸립다. 집가고싶다. 정말로.',
    url: '/hello',
  },
  {
    src:
      'http://post.phinf.naver.net/MjAxODEwMDVfMjQg/MDAxNTM4NzQ2MjE2OTIx.m0yrQuJzpFatCD3NpB8d09dkjZcyzprTn0hdQUh0COog.MeFjpsYcdihxs9xl2zvfiEso1Jqu-8j2lOK2ulX3Lawg.JPEG/I9kEIxEyIto2VI7ZMFmUO4WfnisE.jpg',
    title: '왜 잇츠교정인가?',
    content: '너무 졸립다. 집가고싶다. 정말로.',
    url: '/hello',
  },
];

class Home extends Component {
  public render() {
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
          <About />
        </Section>
        <Section title="왜 '잇츠 교정'인가?">
          <Notice list={noticeList} />
        </Section>
      </>
    );
  }
}

export default Home;
