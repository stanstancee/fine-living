import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import reducers from './reducers'
import middleware from './middleware'
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import './Style/index.scss';
const store = createStore(reducers, middleware)
const  persistor = persistStore(store)


ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
    <Router>
      <App />
    </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

