import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { editor } from './reducers/index';
import { StoreState } from './types/index';
import { Provider } from 'react-redux';
import 'purecss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: Function;
  }
}

const store = createStore<StoreState>(
  editor, {
    editorContent: '',
    current: -1,
    entries: []
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
