import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import 'App.styled';
import { Footer, Navbar, Template } from 'components/base';
import { Home, Search } from 'pages';
import { theme, ThemeProvider } from 'theme';

const App: React.SFC<{}> = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Template navbar={<Navbar />} footer={<Footer />}>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
      </Template>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
