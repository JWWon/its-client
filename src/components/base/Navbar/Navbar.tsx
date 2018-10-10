import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Navbar.styled';

interface Props {
  scrollY: number;
}

interface State {
  isTop: boolean;
}

class Navbar extends Component<Props, State> {
  public state: State = { isTop: true };

  public getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {
    const isTop = this.checkTop(this.props.scrollY);
    if (isTop !== prevState.isTop) {
      return { isTop };
    }
    return null;
  }

  public componentDidUpdate(
    prevProps: Props,
    prevState: State,
    snapshot: State | null
  ) {
    if (snapshot && snapshot.isTop !== prevState.isTop) {
      const { isTop } = snapshot;
      this.setState({ isTop });
    }
  }

  public componentDidMount() {
    const isTop = this.checkTop(this.props.scrollY);
    this.setState({ isTop });
  }

  public render() {
    const { isTop } = this.state;
    return (
      <S.Container isTop={isTop}>
        <Link to="/">
          <S.Logo />
        </Link>
        <S.LinkWrapper>
          <S.Link to="/about">
            <p>잇츠교정이란?</p>
          </S.Link>
          <S.Link to="/search">
            <p>전국 지역 검색</p>
          </S.Link>
          <S.Link to="/why">
            <p>왜 잇츠교정인가</p>
          </S.Link>
        </S.LinkWrapper>
      </S.Container>
    );
  }

  private checkTop = (scrollY: number) => scrollY < 10;
}

export default Navbar;
