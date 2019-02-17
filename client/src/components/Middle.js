import React, { Component } from 'react';

class Middle extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h2>Put the weather here pls</h2>
        <h1>FUEGOOOOOOOOOOOOOOOOOOOOO</h1>
      </div>
    );
  }
}

export default Middle;
