import React, { Component } from 'react';
import './App.css';
import Nav from './component/Nav/Nav';
import routes from './routes';
import store from './ducks/store';
import {HashRouter, withRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
        <div className="App">
          <Nav 
          history={this.props.history} 
          location={this.props.location}/>
          {routes}
        </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default withRouter(App);
