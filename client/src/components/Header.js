import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="column1">
          <Button>SOS</Button>
        </div>
        <div className="column2" />
        <Button>Login</Button>
      </div>
    );
  }
}

export default Header;
