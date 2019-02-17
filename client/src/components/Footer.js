import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const ButtonContainer = styled.div`
  display: flex;
  height: 40%;

  justify-content: center;
`;

const Btn = styled(Button)`
  margin: 15px;
`;

class Footer extends Component {
  render() {
    return (
      <ButtonContainer>
        <Btn
          variant="contained"
          color="primary"
          size="large"
          style={{ margin: 15, width: '100%' }}
        >
          Map
        </Btn>
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ margin: 15, width: '100%' }}
        >
          Weather
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ margin: 15, width: '100%' }}
        >
          Ask
        </Button>
      </ButtonContainer>
    );
  }
}

export default Footer;
