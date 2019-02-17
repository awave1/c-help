import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Column, Row } from 'simple-flexbox';

class Header extends Component {
  render() {
    return (
      <div className="headerRow">
        <Row horizontal="center">
          <Button variant="contained" color="secondary" style={styles}>
            SOS
          </Button>
        </Row>
      </div>
    );
  }
}

const styles = {
  marginTop: 25,
  maxWidth: '27%',
  maxHeight: '50%',
  minWidth: '27%',
  minHeight: '50%',
  fontSize: 30,
};
export default Header;
