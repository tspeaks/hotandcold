import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { Provider } from 'react-redux';

import store from './store';
=======
>>>>>>> 6fb049b9d5eec9a100347aeb2f9e63f4ba00fe21

import './reset.css';
import './index.css';

import Game from './components/game';

ReactDOM.render(
<<<<<<< HEAD
  <Provider store={store}>
    <Game />
  </Provider>,
=======
  <Game />,
>>>>>>> 6fb049b9d5eec9a100347aeb2f9e63f4ba00fe21
  document.getElementById('root')
);
