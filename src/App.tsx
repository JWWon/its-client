import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'theme';

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <h1>HELLO</h1>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
