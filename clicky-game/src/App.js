import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    order: [1,2,3,4,5,6,7,8,9,10,11,12]
  }

  newOrder = () => {
    for (let i = this.state.order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.state.order[i], this.state.order[j]] = [this.state.order[j], this.state.order[i]];
    }
  }

  render() {
    this.newOrder();
    console.log(this.state.order);
    
    return (
    <div className="row">
      <div id={this.state.order[0]} className="col-3">1</div>
      <div id={this.state.order[1]} className="col-3">2</div>

    </div>
    );
  }
}

export default App;
