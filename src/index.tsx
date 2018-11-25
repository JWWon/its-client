import * as React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const rootComponent = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement.hasChildNodes()) {
  hydrate(rootComponent, rootElement);
} else {
  render(rootComponent, rootElement);
}
// registerServiceWorker();
