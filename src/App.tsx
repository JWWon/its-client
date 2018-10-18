import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import 'App.styled';
import { Footer, Navbar, Template } from 'components/base';
import { About, Announcement, Home, Search } from 'pages';
import { theme, ThemeProvider } from 'theme';

const App: React.SFC<{}> = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Template navbar={<Navbar />} footer={<Footer />}>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/about" component={About} />
        <Route path="/announcement" component={Announcement} />
      </Template>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
