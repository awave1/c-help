import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Column, Row } from 'simple-flexbox';

class Header extends Component {
  render() {
    return (
      <div className="headerRow">
        <Row>
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
  marginLeft: 55,
  maxWidth: '23%',
  maxHeight: '50%',
  minWidth: '23%',
  minHeight: '50%',
  fontSize: 30,
};
export default Header;
