import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Column, Row } from 'simple-flexbox';

class Footer extends Component {
  render() {
    return (
      <div style={{ paddingTop: 30 }}>
        <Row>
          <Column flexGrow={1} horizontal="center">
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={styles}
            >
              Map
            </Button>
          </Column>
          <Column flexGrow={1} horizontal="center">
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={styles}
            >
              Weather
            </Button>
          </Column>
          <Column flexGrow={1} horizontal="center">
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={styles}
            >
              Ask
            </Button>
          </Column>
        </Row>
      </div>
    );
  }
}

const styles = {
  maxWidth: '75%',
  maxHeight: '350%',
  minWidth: '75%',
  minHeight: '350%',
  fontSize: 30,
};

export default Footer;
