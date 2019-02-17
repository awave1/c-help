import React, { Component } from 'react';
import styled from 'styled-components';
import Routes from './Routes';

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
        <Routes />
      </MainDisplay>
    );
  }
}

export default Middle;
