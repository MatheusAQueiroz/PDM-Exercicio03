import React from 'react';
import { Platform, StatusBar } from 'react-native';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import contatosReducer from './store/contatos-reducer';

const rootReducer = combineReducers({
  contatos: contatosReducer
})

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

import Navegador from './navegador/Navegador';

import { init } from './helpers/db';
init()
  .then(() => console.log('Base iniciada com sucesso'))
  .catch((e) => console.log(e))

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle='defalut'/>
      <Navegador/>
    </Provider>
  );
}
