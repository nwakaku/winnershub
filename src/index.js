import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SimpleReactLightbox from 'simple-react-lightbox'

import {Provider} from 'react-redux';
import store from './app/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
