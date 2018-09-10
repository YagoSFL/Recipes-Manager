import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Zoom, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'

const styles = theme => ({
    root: {
      width: 500,
      position: 'relative',
      minHeight: 200,
    },
    fab: {
      position: 'absolute',
      bottom: 20,
      right: 20,
    },
    AddColor: {
      backgroundColor: '#B71C1C',
      '&:hover': {
        backgroundColor: '#C62828'
      },
      color: '#FAFAFA',
    },
    EditColor: {
      backgroundColor: '#757575',
      '&:hover': {
        backgroundColor: '#9E9E9E'
      },
      color: '#FAFAFA'
    }
  });

class FloatingActionButton extends Component {
    
  
    render() {
      const { classes, theme, value, onClick } = this.props;
      const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
      };
  
      const fabs = [
        {
          color: classes.AddColor,
          className: classes.fab,
          icon: <AddIcon />,
        },
        {
          color: classes.EditColor,
          className: classes.fab,
          icon: <EditIcon />,
        }
      ]
  
      return (
        <div>
          {fabs.map((fab, index) => (
            <Zoom
              key={fab.color}
              in={value === index}
              timeout={transitionDuration}
              style={{  
                transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
              }}
              unmountOnExit
            >
              <Button variant="fab" className={`${fab.className} ${fab.color}`} onClick={onClick}>
                {fab.icon}
              </Button>
            </Zoom>
          ))}
        </div>
      );
    }
  }

  export default withStyles(styles, { withTheme: true })(FloatingActionButton)