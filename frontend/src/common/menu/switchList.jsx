import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Typography, List, ListItem, ListItemIcon, 
    ListItemText, Switch } from '@material-ui/core'
import Icon from '../icons'
import tags from '../arrayTags'

const styles = theme => ({
    root: {
        overflow: 'auto',
        [theme.breakpoints.up('md')]: {
          maxHeight: 518
        },
        color: '#757575'
    },
    colorSwitchBase: {
        color: '#F5F5F5',
        '&$colorChecked': {
          color: '#B71C1C',
          '& + $colorBar': {
            backgroundColor: '#B71C1C',
          },
        },
      },
      colorBar: {},
      colorChecked: {}
})

class SwitchList extends Component {
    renderList() {
        

        const { classes, onChange } = this.props

        return tags.map((tag, index)=> (
            <ListItem key={index}>
                <ListItemIcon className={classes.icon}><Icon icone={tag}/></ListItemIcon>
                <ListItemText primary={tag} />
                <Switch classes={{switchBase: classes.colorSwitchBase,
                        checked: classes.colorChecked,
                        bar: classes.colorBar}}
                        onChange={onChange}
                        value={tag} />
            </ListItem> 
        ))
    }
    render() {         
        const { classes } = this.props
        return (
            <List component="nav" className={classes.root}>
                <ListItem>
                    <Typography variant="title">
                        Tags
                    </Typography>
                </ListItem>
                {this.renderList()}                          
            </List>
        )
    }
}

export default withStyles(styles)(SwitchList)