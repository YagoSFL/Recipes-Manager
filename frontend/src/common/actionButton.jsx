import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Zoom, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'
import green from '@material-ui/core/colors/green'

const styles = theme => ({
    root: {
      width: 500,
      position: 'relative',
      minHeight: 200,
    },
    fab: {
      position: 'absolute',
      bottom: theme.spacing.unit * 2,
      right: theme.spacing.unit * 2,
    },
    fabGreen: {
      color: theme.palette.common.white,
      backgroundColor: green[500],
    },
  });

class FloatingActionButton extends Component {
    state = {
      value: 0,
    };
  
    handleChange = (event, value) => {
      this.setState({ value });
    };
  
    handleChangeIndex = index => {
      this.setState({ value: index });
    };
  
    render() {
      const { classes, theme } = this.props;
      const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
      };
  
      const fabs = [
        {
          color: 'primary',
          className: classes.fab,
          icon: <AddIcon />,
        },
        {
          color: 'secondary',
          className: classes.fab,
          icon: <EditIcon />,
        }
      ]
  
      return (
        <div className={classes.root}>
          {fabs.map((fab, index) => (
            <Zoom
              key={fab.color}
              in={this.state.value === index}
              timeout={transitionDuration}
              style={{  
                transitionDelay: `${this.state.value === index ? transitionDuration.exit : 0}ms`,
              }}
              unmountOnExit
            >
              <Button variant="fab" className={fab.className} color={fab.color}>
                {fab.icon}
              </Button>
            </Zoom>
          ))}
        </div>
      );
    }
  }

  export default withStyles(styles, { withTheme: true })(FloatingActionButton)