import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'

// stateを使用するため素のcomponentからでなくcontainerから取得
// containerがcomponentを使うためのデータを作成し、それをcomponentに渡している
import Ranking from './containers/Ranking'
import Nav from './containers/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*
          カテゴリ名、IDはハードコーディング
        */}
        <Nav />

        <Switch>
          <Route path="/all" component={Ranking} />
          <Route
            path="/category/:id"
            render={
              ({ match }) => <Ranking categoryId={match.params.id} />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App
