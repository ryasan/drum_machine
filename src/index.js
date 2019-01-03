import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

document.title = 'React Drum Machine';

const APP_WITH_STORE = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(APP_WITH_STORE, document.getElementById('root'));
registerServiceWorker();
