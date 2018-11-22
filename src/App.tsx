import React from 'react';
import { Route } from 'react-router-dom';

import GlobalStyle from 'App.styled';
import { Core, Footer, Navbar, Template, withSplitter } from 'components/base';
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
      <Route path="/" exact component={withSplitter(import('pages/Home'))} />
      <Route path="/about" component={withSplitter(import('pages/About'))} />
      <Route
        path="/registeration"
        component={withSplitter(import('pages/Registration'))}
      />
      <Route path="/search" component={withSplitter(import('pages/Search'))} />
      <Route
        path="/announcement"
        component={withSplitter(import('pages/Announcement'))}
      />
      <Route
        path="/clinic/:id"
        component={withSplitter(import('pages/Clinic'))}
      />
    </Template>
  </ThemeProvider>
);

export default App;
