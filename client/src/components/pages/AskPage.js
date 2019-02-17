import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class AskPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      request: '',
    };
  }

  handleChange = request => event => {
    this.setState({
      request: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <TextField
          id="outlined-name"
          label="Ask me something!"
          className={classes.textField}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />
      </div>
    );
  }
}

export default withStyles(styles)(AskPage);
