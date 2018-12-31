// tslint:disable:no-string-literal
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GlobalStyle from 'App.styled';
import {
  Core,
  Footer,
  Modal,
  Navbar,
  Template,
  withSplitter,
} from 'components/base';
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
      <GlobalStyle />
      <Core />
      <Modal />
      <Switch>
        <Route path="/" component={withSplitter('pages/Home')} exact />
        <Route path="/about" component={withSplitter('pages/About')} />
        <Route
          path="/registeration"
          component={withSplitter('pages/Registration')}
        />
        <Route path="/search" component={withSplitter('pages/Search')} />
        <Route
          path="/announcement"
          component={withSplitter('pages/Announcement')}
        />
        <Route path="/clinic/:id" component={withSplitter('pages/Clinic')} />
      </Switch>
    </Template>
  </ThemeProvider>
);

export default App;
