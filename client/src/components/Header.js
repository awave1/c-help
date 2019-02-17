import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Row } from 'simple-flexbox';

const HeaderContainer = styled.div`
  display: flex;
  align-self: center;
  height: 20%;
`;

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <Button
          variant="contained"
          color="secondary"
          style={{ margin: 'auto' }}
        >
          SOS
        </Button>
      </HeaderContainer>
    );
  }
}

export default Header;
