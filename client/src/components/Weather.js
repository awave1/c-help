import React, { Component } from 'react';
import axios from 'axios';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: '',
    };

    this.getWeather = this.getWeather.bind(this);
  }

  async getWeather(requestText) {
    const { data } = await axios.get(
      `/api/v1/dialogflow?requestText=${requestText}`
    );

    console.log(data);

    this.setState({
      weather: data.weather,
    });
  }

  async componentDidMount() {
    await this.getWeather("what's the weather in calgary");
  }

  render() {
    return <div>{this.state.weather}</div>;
  }
}
export default Weather;
