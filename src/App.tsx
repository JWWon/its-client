import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import 'App.styled';
import { Core, Footer, Navbar, Template } from 'components/base';
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
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/registeration" component={Registration} />
        <Route path="/search" component={Search} />
        <Route path="/announcement" component={Announcement} />
        <Route path="/clinic/:id" component={Clinic} />
      </Template>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
