import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import GlobalStyle from 'App.styled';
import { Core, Footer, Navbar, Template, withTracker } from 'components/base';
import { About, Announcement, Clinic, Home, Registration, Search } from 'pages';
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
    <BrowserRouter>
      <Template navbar={<Navbar />} footer={<Footer />}>
        <Core />
        <GlobalStyle />
        <Route exact path="/" component={withTracker(Home)} />
        <Route exact path="/about" component={withTracker(About)} />
        <Route
          exact
          path="/registeration"
          component={withTracker(Registration)}
        />
        <Route path="/search" component={withTracker(Search)} />
        <Route path="/announcement" component={withTracker(Announcement)} />
        <Route path="/clinic/:id" component={withTracker(Clinic)} />
      </Template>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
