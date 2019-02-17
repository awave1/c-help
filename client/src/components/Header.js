import React, { Component } from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import { NotificationImportant, Home } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
  position: absolute;
  display: flex;
  align-self: center;
  flex-flow: column;
  height: 20%;
  z-index: 999;
`;

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <HeaderContainer>
        <Fab
          variant="extended"
          color="secondary"
          aria-label="Add"
          size="small"
          className={classes.margin}
        >
          <NotificationImportant className={classes.extendedIcon} />
          SOS
        </Fab>
        <IconButton component={Link} to="/">
          <Home />
        </IconButton>
      </HeaderContainer>
    );
  }
}

export default withStyles(styles)(Header);
