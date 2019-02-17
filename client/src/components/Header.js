import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Header extends Component {
  render() {
    return (
      <div className="column1">
        <Button variant="contained" color="secondary" size="large">
          SOS
        </Button>
      </div>
    );
  }
}

export default Header;
