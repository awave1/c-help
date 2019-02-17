import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import styled from 'styled-components';

const styles = {
  card: {
    minWidth: 125,
    margin: 15,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: '',
      forecast: [],
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
      forecast: data.forecast,
    });
  }

  async componentDidMount() {
    await this.getWeather("what's the weather in calgary");
  }

  render() {
    const { classes } = this.props;
    const point = <span className={classes.bullet}>•</span>;

    const forecast = this.state.forecast.map(f => (
      <Card className={classes.card} key={f.date.stringValue}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            <b>
              {f.description.stringValue.charAt(0).toUpperCase() +
                f.description.stringValue}
            </b>
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {new Date(f.date.stringValue).toLocaleDateString()}
            <br />
            {new Date(f.date.stringValue).toLocaleTimeString()}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            <b>Current: </b>
            {f.temp.structValue.fields.current.numberValue}
            <br />
            <b>Min: </b>
            {f.temp.structValue.fields.min.numberValue}
            <br />
            <b>Max: </b>
            {f.temp.structValue.fields.max.numberValue}
            <br />
          </Typography>
        </CardContent>
      </Card>
    ));

    return (
      <WeatherWrapper>
        <div style={{ alignSelf: 'center' }}>{this.state.weather}</div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>{forecast}</div>
      </WeatherWrapper>
    );
  }
}
export default withStyles(styles)(Weather);
