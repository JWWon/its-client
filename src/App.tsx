import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import 'App.styled';
import { Footer, Navbar, Template } from 'components/base';
import { Home } from 'pages';
import { theme, ThemeProvider } from 'theme';

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Template navbar={<Navbar />} footer={<Footer />}>
            <Route exact path="/" component={Home} />
          </Template>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
