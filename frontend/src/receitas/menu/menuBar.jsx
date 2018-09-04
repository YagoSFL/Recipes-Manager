import React, { Component } from 'react'
import If from '../../common/if'
import { AppBar, Toolbar, IconButton, Typography, 
    Tab, Tabs, Collapse } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { Menu } from '@material-ui/icons'
import { Nutrition  } from 'mdi-material-ui'

const drawerWidth = 330

const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'absolute',
        display: 'flex',
        width: '100%',
      },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        background: '#B71C1C',
        position: 'absolute',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
          width: `calc(100% - ${drawerWidth}px)`
        }
      },
      tabBar: {
        zIndex: theme.zIndex.drawer + 1,
        background: '#B71C1C'
      },
      tabsIndicator: {
        backgroundColor: '#FFF',
      },
      tabRoot: {
        marginRight: theme.spacing.unit * 4,
        '&$tabSelected': {
          color: '#FFF'
        },
        '&:focus': {
          color: '#FFF',
        },
      },
      tabSelected: {},
      navIconHide: {
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
      }
})

class MenuBar extends Component {
    
    render() {

        const { classes, onClick, onChange, showFilters, tabValue } = this.props

        return (
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={onClick}
                    className={classes.navIconHide}
                    >
                    <Menu/>
                    </IconButton>
                    <Typography variant="title" color="inherit" noWrap>
                        <Nutrition/> Recipes Manager
                    </Typography>
                </Toolbar>
                <If teste={showFilters}>
                <Collapse in={showFilters} timeout={200}>
                <div position='static' className={classes.tabBar}>
                    <Tabs
                        value={tabValue}
                        onChange={onChange}
                        classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
                        >
                        <Tab
                            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                            label="Salgadas"
                        />
                        <Tab
                            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                            label="Doces"
                        />
                    </Tabs>
                </div>
                </Collapse>
                </If>
            </AppBar>
        )
    }
}

export default withStyles(styles)(MenuBar)