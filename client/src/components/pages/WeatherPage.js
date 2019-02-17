import React from 'react';
import styled from 'styled-components';
import Weather from '../Weather';

const WeatherContainer = styled.div``;
class WeatherPage extends React.Component {
  render() {
    return (
      <WeatherContainer>
        <Weather />
      </WeatherContainer>
    );
  }
}

export default WeatherPage;
