/* tslint:disable:jsx-no-lambda */
import React, { Component, ReactNodeArray } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { getClinicLength } from 'api/clinic';
import { getSlides, Image } from 'api/image';
import { Section } from 'components/common';
import About from './About';
import Announcement from './Announcement';
import Header from './Header';
import * as s from './Home.styled';
import Slide from './Slide';

const announceList = [
  {
    src:
      'https://media.vanityfair.com/photos/56e6ca9c4cac3c8266605125/master/w_768,c_limit/charlie-puth-feud.jpg',
    title: '왜 전문의어야 하는가?',
    content: '너무 졸립다. 집가고싶다. 정말로.',
    url: '/announcement#mocA-HZuYN',
  },
  {
    src:
      'http://blogfiles.naver.net/MjAxNzA1MDJfMjQ2/MDAxNDkzNjgxMDY4NzE3.gFzTACUE3cIOelWyOO60tjgocwREMWP41_sjnpGN3C8g.ZqUhAaljgf0TZNoHRCrb1BqnLKq2PfZenY5LmWG7zpEg.JPEG.fstdevil/05.jpg',
    title: '왜 병원장이 전문의어야 하는가?',
    content: '너무 졸립다. 집가고싶다. 정말로.',
    url: '/announcement#W0kR4lJcaK',
  },
  {
    src:
      'http://post.phinf.naver.net/MjAxODA5MDZfNDgg/MDAxNTM2MjEyNDI0NjQ4.1iDQIU9DzxPqDGr-62CaE54CIiuXvn_Bfggm_5DRPm8g.F35HFnXMcSgWIGw3Krb3d2xqgXz-F8vwMBnP5Riy0l8g.JPEG/IvEnu9ym-r5HyTb04lG1ChoBGClM.jpg',
    title: '왜 잇츠교정인가?',
    content: '너무 졸립다. 집가고싶다. 정말로.',
    url: '/announcement#_YLWnAtbOI',
  },
];

interface State {
  count: number;
  slides: Image[];
}

class Home extends Component<RouteComponentProps<any>, State> {
  public state: State = {
    count: 0,
    slides: [],
  };

  public async componentDidMount() {
    const count = await getClinicLength();
    const slides = await getSlides();
    this.setState({ count, slides });
  }

  public render() {
    return (
      <>
        <s.Slider
          prevArrow={<s.HideArrow />}
          nextArrow={<s.HideArrow />}
          appendDots={(dots: ReactNodeArray) => (
            <s.DotsWrapper>
              <div>
                <s.ArrayGray style={{ transform: 'rotate(-90deg)' }} />
                <ul>{dots}</ul>
                <s.ArrayGray style={{ transform: 'rotate(90deg)' }} />
              </div>
            </s.DotsWrapper>
          )}>
          {this.state.slides.map((image, index) => (
            <Slide key={index} image={image} />
          ))}
        </s.Slider>
        <Header count={this.state.count} />
        <Section title="'잇츠 교정'이란?">
          <About />
        </Section>
        <Section title="왜 '잇츠 교정'인가?">
          <Announcement list={announceList} />
        </Section>
      </>
    );
  }
}

export default Home;
