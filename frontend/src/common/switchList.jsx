import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Typography, List, ListItem, ListItemIcon, 
    ListItemText, Switch } from '@material-ui/core'
import { Favorite, Whatshot } from '@material-ui/icons'
import { ClockFast, Snowflake, Basecamp, Beer, Bowl, Carrot,
    FoodOff, Sausage, Rice, Fish, Muffin, Pizza } from 'mdi-material-ui'

const styles = theme => ({
    root: {
        overflow: 'auto',
        [theme.breakpoints.up('md')]: {
          maxHeight: 518
        }
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
      colorChecked: {},
})

class SwitchList extends Component {
    renderList() {
        const tags = ["Favoritas", "Rapidas", "Quentes", "Frias", "Carnes", "Massas", "Frutos do Mar",
        "Acompanhamentos", "Sopas", "Vegetarianas", "Veganas", "Low Carb", "Bebidas", "Sobremesas"]

        const { classes, onChange } = this.props

        return tags.map((tag, index)=> (
            <ListItem button key={index}>
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