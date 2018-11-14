/* tslint:disable:jsx-no-lambda */
import { getClinicLength } from 'api/clinic';
import {
  getNews,
  getSlides,
  News as NewsInterface,
  Slide as SlideInterface,
} from 'api/image';
import React, { Component, ReactNodeArray } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import About from './About';
import Header from './Header';
import * as s from './Home.styled';
import News from './News';
import Slide from './Slide';

interface State {
  count: number;
  slides: SlideInterface[];
  news: NewsInterface[];
}

class Home extends Component<RouteComponentProps<any>, State> {
  public state: State = {
    count: 0,
    slides: [],
    news: [],
  };

  public async componentDidMount() {
    const count = await getClinicLength();
    const slides = await getSlides();
    const news = await getNews();
    this.setState({ count, slides, news });
  }

  public render() {
    const { slides, count, news } = this.state;
    return (
      <>
        <s.Slider
          single={slides.length === 1}
          prevArrow={<s.HideArrow />}
          nextArrow={<s.HideArrow />}
          appendDots={(dots: ReactNodeArray) => (
            <s.DotsWrapper>
              <div>
                <s.ArrayGray />
                <ul>{dots}</ul>
                <s.ArrayGray />
              </div>
            </s.DotsWrapper>
          )}>
          {slides.map((image, index) => (
            <Slide key={index} image={image} />
          ))}
        </s.Slider>
        <Header count={count} />
        <About />
        <News list={news} />
      </>
    );
  }
}

export default Home;
