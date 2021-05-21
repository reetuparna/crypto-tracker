import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import rootReducer from './reducers';

const store = createStore(rootReducer);
//store.dispatch({ type: 'FETCH_INIT_DATA_ACTION' });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


