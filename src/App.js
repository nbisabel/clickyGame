import React, { Component } from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Card";
import Header from "./components/Header";
import characters from "./characters.json";
import './App.css';

class App extends Component {
state ={
  characters,
  score: 0,
  highscore: 12
  //maybe revisit the highscore to be 0? 
};

gameover = () => {
  if (this.state.score > this.state.highscore) {
    this.setState({highsore: this.state.score}, function () {
      console.log(this.state.highscore);
    });
  }
  this.state.cards.forEach(card => {
    card.count = 0;
  });
  alert(`Game Over: ( \nscore: ${this.state.score}`);
  this.setState({score: 0});
  return true;
}
  
}


export default App;
