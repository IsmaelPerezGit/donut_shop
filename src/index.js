import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import Store from './store';
import './index.css';

const store = Store();

ReactDOM.render(
  <Provider store={store}>
   <App />
 </Provider>,
  document.getElementById('root')
);
