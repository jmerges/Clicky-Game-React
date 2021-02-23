import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Token from "./components/token";

class App extends Component {
  state = {
    order: [1,2,3,4,5,6,7,8,9,10,11,12],
    picked: [],
    topScore: 0,
    status: "Click 'submit' on a picture to start. Don't select the same character twice!",
  }

  // Shuffle Algorithm
  newOrder = () => {
    for (let i = this.state.order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.state.order[i], this.state.order[j]] = [this.state.order[j], this.state.order[i]];
    }
  }

  onPickedChange = (newPicked) => {
    // If this card hasn't been picked, add it to picked array
    if (!this.state.picked.includes(newPicked)) {
      var newArray = this.state.picked;
      newArray.push(newPicked);
      this.setState({ picked: newArray });
      if (this.state.picked.length > this.state.topScore) {
        this.state.topScore = this.state.picked.length;
      }
      this.state.status = "Correct! Keep going"
    } else {
      this.setState({ picked: []});
      this.state.status = "Oops! That's wrong. Try again"
    }
  }

  render() {
    this.newOrder();
    console.log(this.state.order);
    console.log(this.state.picked);
    
    return (
    <div>
      <div className="jumbotron bg-dark text-center text-white">
        <div className="row">
        <div className="col-4"><h1>CLICKY GAME</h1></div>
        <div className="col-4"><h2>{this.state.status}</h2></div>
        <div className="col-4"><h1>Current Score: {this.state.picked.length}</h1>
        <h1>Top Score: {this.state.topScore}</h1></div>
        </div>




      </div>
    <div className="row">
      <div id={this.state.order[0]} className="col-3"><Token onPickedChange={this.onPickedChange} charId={this.state.order[0]} /></div>
      <div id={this.state.order[1]} className="col-3"><Token onPickedChange={this.onPickedChange} charId={this.state.order[1]} /></div>
      <div id={this.state.order[2]} className="col-3"><Token onPickedChange={this.onPickedChange} charId={this.state.order[2]} /></div>
      <div id={this.state.order[3]} className="col-3"><Token onPickedChange={this.onPickedChange} charId={this.state.order[3]} /></div>
      <div id={this.state.order[4]} className="col-3"><Token onPickedChange={this.onPickedChange} charId={this.state.order[4]} /></div>
      <div id={this.state.order[5]} className="col-3"><Token onPickedChange={this.onPickedChange} charId={this.state.order[5]} /></div>
      <div id={this.state.order[6]} className="col-3"><Token onPickedChange={this.onPickedChange} charId={this.state.order[6]} /></div>
      <div id={this.state.order[7]} className="col-3"><Token onPickedChange={this.onPickedChange} charId={this.state.order[7]} /></div>
      <div id={this.state.order[8]} className="col-3"><Token onPickedChange={this.onPickedChange} charId={this.state.order[8]} /></div>
      <div id={this.state.order[9]} className="col-3"><Token onPickedChange={this.onPickedChange} charId={this.state.order[9]} /></div>
      <div id={this.state.order[10]} className="col-3"><Token onPickedChange={this.onPickedChange} charId={this.state.order[10]} /></div>
      <div id={this.state.order[11]} className="col-3"><Token onPickedChange={this.onPickedChange} charId={this.state.order[11]} /></div>
    </div>
    </div>);
  }
}

export default App;
