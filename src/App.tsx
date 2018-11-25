// tslint:disable:no-string-literal
import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

import GlobalStyle from 'App.styled';
import { Core, Template, withSplitter } from 'components/base';
import { theme, ThemeProvider } from 'theme';

declare global {
  interface Window {
    daum: {
      Postcode: any;
      maps: any;
    };
  }
}

const Navbar = Loadable({
  loader: () => import('components/base/Navbar'),
  loading: () => null,
  modules: ['components/base/Navbar'],
  webpack: () => [require['resolveWeak']('components/base/Navbar')],
});

const Footer = Loadable({
  loader: () => import('components/base/Footer'),
  loading: () => null,
  modules: ['components/base/Footer'],
  webpack: () => [require['resolveWeak']('components/base/Footer')],
});

const App: React.SFC<{}> = () => (
  <ThemeProvider theme={theme}>
    <Template navbar={<Navbar />} footer={<Footer />}>
      <Core />
      <GlobalStyle />
      <Switch>
        <Route path="/" component={withSplitter('pages/Home')} exact />
        <Route path="/about" component={withSplitter('pages/About')} exact />
        <Route
          path="/registeration"
          component={withSplitter('pages/Registration')}
          exact
        />
        <Route path="/search" component={withSplitter('pages/Search')} exact />
        <Route
          path="/announcement"
          component={withSplitter('pages/Announcement')}
          exact
        />
        <Route
          path="/clinic/:id"
          component={withSplitter('pages/Clinic')}
          exact
        />
      </Switch>
    </Template>
  </ThemeProvider>
);

export default App;
