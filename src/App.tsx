import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import 'App.styled';
import { Footer, Navbar, Template } from 'components/base';
import { Home } from 'pages';
import { theme, ThemeProvider } from 'theme';

const App: React.SFC<{}> = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Template navbar={<Navbar />} footer={<Footer />}>
        <Route exact path="/" component={Home} />
      </Template>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
