import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import { Provider,} from 'react-redux';
import './i18next';

const defaultState = {
  rightAnswer: 0,
  allAnswer1: 0,
};


const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_ANSWERS':
      return {
        ...state,
        allAnswer1: state.allAnswer1 + 1,
        rightAnswer: state.rightAnswer + action.payload,
      };
    case 'ADD_NULL':
      return {
        ...state,
        allAnswer1: action.payload,
        rightAnswer: action.payload,
      };

    default:
      return state;
  }
};
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
