import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
    }
    body {
        box-sizing: border-box;
        margin:0; 
        padding: 0;
        line-height: 1.4;
    }
`;


const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

