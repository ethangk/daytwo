import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { compose, createStore } from 'redux';
import { editor } from './reducers/index';
import { StoreState } from './types/index';
import { Provider } from 'react-redux';
import 'purecss';
import persistState from 'redux-localstorage';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: Function;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore<StoreState>(
  editor, {
    editorContent: '',
    current: -1,
    entries: [],
    editing: false
  },
  composeEnhancers(persistState())
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
