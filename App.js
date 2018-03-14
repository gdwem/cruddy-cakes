import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CakeShow from './src/components/CakeShow.js';
import CakesConnect from './src/util/CakesConnect.js';
import CakeList from './src/components/CakeList';
import CakeSubmit from './src/components/CakeSubmit';
import './src/css/style.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { cakes: [] };
    this.showCakes = this.showCakes.bind(this);
  }

  showCakes() {
    CakesConnect.getCakes().then(cakes =>
      this.setState({ cakes: cakes })
    )
  }

  addCake() {
    CakesConnect.submitCakes();
  }

  render() {
    return (
      <div className="main">
        <h1>Cakes</h1>
        <CakeShow showCakes={this.showCakes} />
        <CakeSubmit addCake={this.addCake} />
        <CakeList cakes={this.state.cakes} />
      </div>
    )
  }

}

ReactDOM.render(<App/>, document.getElementById('container'))
