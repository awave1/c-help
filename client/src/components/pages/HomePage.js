import React from 'react';
import DateTime from '../DateTime';
import Weather from '../Weather';

class Home extends React.Component {
  render() {
    return (
      <>
        <DateTime />
        <Weather />
      </>
    );
  }
}

export default Home;
