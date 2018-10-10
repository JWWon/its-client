import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'App.styled';
import Footer from 'components/base/Footer';
import Navbar from 'components/base/Navbar';
import Template from 'components/base/Template';
import { theme, ThemeProvider } from 'theme';

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Template navbar={<Navbar />} footer={<Footer />}>
            <h1>HELLO</h1>
          </Template>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
