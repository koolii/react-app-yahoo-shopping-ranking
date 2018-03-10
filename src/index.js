import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import App from './App';
import createStore from './createStore'

const history = createBrowserHistory()
const store = createStore(history)

ReactDOM.render(
  <Provider store={store}>
  {/*
    これでコメントにすることが出来る
    Linkコンポーネントが動かせるようにreact-router-domではなく
    react-router-reduxのConnectedRouterを使う
  */}
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
