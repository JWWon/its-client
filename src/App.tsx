import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import 'App.styled';
import { Footer, Navbar, Template } from 'components/base';
import { About, Announcement, Clinic, Home, Search } from 'pages';
import { theme, ThemeProvider } from 'theme';

const App: React.SFC<{}> = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Template navbar={<Navbar />} footer={<Footer />}>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/search" component={Search} />
        <Route path="/announcement" component={Announcement} />
        <Route path="/clinic/:id" component={Clinic} />
      </Template>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
