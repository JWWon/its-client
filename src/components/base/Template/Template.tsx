import React, { Component, ReactNode } from 'react';
import * as S from './Template.styled';

interface Props {
  navbar: ReactNode;
  children: ReactNode;
  footer: ReactNode;
}

interface State {
  scrollY: number;
  isMounted: boolean;
  isTop: boolean;
}

class Template extends Component<Props, State> {
  public state: State = { scrollY: 0, isTop: true, isMounted: false };
  private supportPageOffset: boolean;

  public componentDidMount() {
    this.supportPageOffset = window.pageXOffset !== undefined;
    window.addEventListener('scroll', this.getScrollY);
    this.setState({ isMounted: true });
  }

  public componentWillUnmount() {
    window.removeEventListener('scroll', () => null);
  }

  public render() {
    const { navbar, children, footer } = this.props;
    return (
      this.state.isMounted && (
        <S.Container>
          <S.Body>{children}</S.Body>
          <S.Navbar isTop={this.state.isTop}>{navbar}</S.Navbar>
          <S.Footer>{footer}</S.Footer>
        </S.Container>
      )
    );
  }

  private getScrollY = (e: Event) => {
    const scrollY = this.supportPageOffset
      ? window.pageYOffset
      : document.body.scrollTop;

    const isTop = this.checkTop(scrollY);
    if (isTop !== this.state.isTop) {
      this.setState({ scrollY, isTop });
      return;
    }
    this.setState({ scrollY });
  };

  private checkTop = (scrollY: number) => scrollY < 10;
}

export default Template;
