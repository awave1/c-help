import React from 'react';
import styled from 'styled-components';
import DateTime from '../DateTime';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DateWrapper = styled.div`
  display: flex;
  align-self: center;
  align-items: baseline;
`;

class Home extends React.Component {
  render() {
    return (
      <HomeWrapper>
        <h1>Welcome to C-Help</h1>
        <DateWrapper>
          <h2 style={{ margin: 0, paddingRight: 10 }}>Today is </h2>
          <DateTime />
        </DateWrapper>
      </HomeWrapper>
    );
  }
}

export default Home;
