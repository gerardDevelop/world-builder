import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { CustomRoute } from './components/CustomRoute';
import './App.css';

export default class App extends Component {
  static displayName = App.name;

  /*
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/custom-route' component={CustomRoute} />
  */

  render () {
    return (
      <div className="App" style={{ cursor: 'url(assets/crosshair1.cur), auto' }} >
      </div>
    );
  }
}
