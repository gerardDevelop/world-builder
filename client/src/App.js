import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import TilePalette from './components/TilePalette';

export default class App extends Component {
  static displayName = App.name;

  /*
    <Route exact path='/' component={Home} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetch-data' component={FetchData} />
    <Route path='/custom-route' component={CustomRoute} />  
  */

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render () {
    
    //const crossHairCursor = 'url(assets/crosshair1.cur), auto';

    /*const toReturn = (<div className="App" style={{ cursor: 'url(assets/crosshair1.cur), auto' }} >
      </div>);*/

    const toReturn = (<div className="App">

      
      <Navigation />
      <TilePalette className="TilePalette"  />


    </div>);  
    
    return toReturn;
    
  }
}
