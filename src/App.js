import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sticker from './Sticker.js';
class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }

  displayText = () => {
    let blockoftext=["On the 8th floor in the IMA Studio, she saw that her project has been totally destroyed by a spilled bbt . She got so angry that she almost flipped the whole table over. She was about to yell out loud before she heard someone call out to her. The guy said 'Hey. Don't worry about it. That's not your project. It's just a joke to see how you would react.' He led her to her project. She was so happy it was safe and sound. He said 加油 and left."];
    return blockoftext
  }

  render() {
    return (
      <div className="App">
      <h1>Spice up your boring text with stickers!</h1>
        {this.displayText()}
        <Sticker text={this.displayText()}></Sticker>
      </div>
    );
  }

}

export default App;
