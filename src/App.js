import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Ranking from './components/Ranking'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*
          カテゴリ名、IDはハードコーディング
        */}
        <ul>
          <li><Link to="/all">All categories</Link></li>
          <li><Link to="/category/2502">computers</Link></li>
          <li><Link to="/category/10002">books</Link></li>
        </ul>

        <Route path="/all" component={Ranking} />
        <Route
          path="/category/:id"
          render={
            ({ match }) => <Ranking categoryId={match.params.id} />
          }
        />
      </div>
    );
  }
}

export default App;
