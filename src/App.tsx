import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import 'App.styled';
import { Footer, Navbar, Template } from 'components/base';
import { Home } from 'pages';
import { theme, ThemeProvider } from 'theme';

interface State {
  scrollY: number;
}

class App extends Component<{}, State> {
  public state = {
    scrollY: 0,
  };

  public componentDidMount() {
    window.onscroll = this.getScrollY;
  }

  public render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Template
            navbar={<Navbar scrollY={this.state.scrollY} />}
            footer={<Footer />}>
            <Route exact path="/" component={Home} />
          </Template>
        </BrowserRouter>
      </ThemeProvider>
    );
  }

  private getScrollY = () => {
    const supportPageOffset = window.pageXOffset !== undefined;
    const scrollY = supportPageOffset
      ? window.pageYOffset
      : document.body.scrollTop;
    this.setState({ scrollY });
  };
}

export default App;
