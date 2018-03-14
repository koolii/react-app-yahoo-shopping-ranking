import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import Reboot from 'material-ui/Reboot'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

// stateを使用するため素のcomponentからでなくcontainerから取得
// containerがcomponentを使うためのデータを作成し、それをcomponentに渡している
import Ranking from './containers/Ranking'
import Nav from './containers/Nav'

class App extends Component {
  render() {
    return (
      <div className="App" style={{ paddingLeft: 240 }}>
        <Reboot />

        <AppBar style={{ left: 240 }}>
          <Toolbar>
            <Typography type="title" color="inherit">
              Yahoo shopping Ranking App made by React/Redux
            </Typography>
          </Toolbar>
        </AppBar>

        <Nav />

        <div style={{ marginTop: 64, padding: 32 }}>
          <Switch>
            <Route path="/all" component={Ranking} />
            <Route
              path="/category/1"
              render={() => <Redirect to="/all" />}
            />
            <Route
              path="/category/:id"
              render={
                ({ match }) => <Ranking categoryId={match.params.id} />
              }
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App
