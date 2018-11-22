import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import GlobalStyle from 'App.styled';
import { Core, Footer, Navbar, Template, withSplitter } from 'components/base';
import Search from 'pages/Search';
import { theme, ThemeProvider } from 'theme';

declare global {
  interface Window {
    daum: {
      Postcode: any;
      maps: any;
    };
  }
}

const App: React.SFC<{}> = () => (
  <ThemeProvider theme={theme}>
    <Template navbar={<Navbar />} footer={<Footer />}>
      <Core />
      <GlobalStyle />
      <Switch>
        <Route
          path="/"
          component={withSplitter(() => import('pages/Home'))}
          exact
        />
        <Route
          path="/about"
          component={withSplitter(() => import('pages/About'))}
          exact
        />
        <Route
          path="/registeration"
          component={withSplitter(() => import('pages/Registration'))}
          exact
        />
        <Route path="/search" component={Search} exact />
        <Route
          path="/announcement"
          component={withSplitter(() => import('pages/Announcement'))}
          exact
        />
        <Route
          path="/clinic/:id"
          component={withSplitter(() => import('pages/Clinic'))}
          exact
        />
        <Redirect to="/" />
      </Switch>
    </Template>
  </ThemeProvider>
);

export default App;
