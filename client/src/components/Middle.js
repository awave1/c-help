import React, { Component } from 'react';
import styled from 'styled-components';
import DateTime from './DateTime';
import Weather from './Weather';

const MainDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin: auto;
`;

class Middle extends Component {
  render() {
    return (
      <MainDisplay>
        <DateTime />
        <Weather />
      </MainDisplay>
    );
  }
}

export default Middle;
