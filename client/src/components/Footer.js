import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="column1">
          <Button variant="contained" color="primary" size="large">
            Weather
          </Button>
        </div>
        <div className="column2">
          <Button variant="contained" color="primary" size="large">
            Map
          </Button>
        </div>
        <div className="column3">
          <Button variant="contained" color="primary" size="large">
            Ask
          </Button>
        </div>
      </div>
    );
  }
}

export default Footer;
