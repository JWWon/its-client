import React from 'react';
import { Route, Switch } from 'react-router-dom';

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
        <Route path="/" component={withSplitter('pages/Home')} exact />
        <Route path="/about" component={withSplitter('pages/About')} exact />
        <Route
          path="/registeration"
          component={withSplitter('pages/Registration')}
          exact
        />
        <Route path="/search" component={Search} exact />
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
