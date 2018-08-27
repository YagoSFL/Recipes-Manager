import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { handleChangeTab } from '../actions/menuActions'
import { handleFilter, showData } from  '../actions/recipeActions'
import SwitchList from './switchList'
import MenuBar from './menuBar'
import If from './if'
import { Typography, Hidden, Drawer, Divider, CssBaseline,
     ListItemIcon, MenuList, MenuItem } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Home, Receipt } from '@material-ui/icons'
import FloatingButton from './actionButton'

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
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative'
    }
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    overflowX: 'auto',
    [theme.breakpoints.up('md')]: {
        maxHeight: 630
      }
  },
})


class MenuApp extends Component {

    state = {
        mobileOpen: false
    }
    
    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }))
    }

    render(){
        const { classes, children, handleChangeTab, handleFilter, 
                tabValue, showFilters, showData } = this.props;
        const { mobileOpen } = this.state
        const drawer = (
        <div>
            <MenuList component="nav" >
                    <MenuItem onClick={ () => showData()}>
                    <ListItemIcon >
                        <Home />
                    </ListItemIcon>
                    <Typography variant="title">
                        Home
                    </Typography>
                    </MenuItem>
                <MenuItem>
                <ListItemIcon>
                    <Receipt />
                </ListItemIcon>
                <Typography variant="title">
                    Lista de Compras
                </Typography>
                </MenuItem>
            </MenuList>
            <Divider />
            <If teste={showFilters}>
                <SwitchList onChange={handleFilter}/>
            </If>
        </div>
    );
        return (
            <Fragment>
                <CssBaseline />
                    <div className={classes.root}>
                        <MenuBar onClick={this.handleDrawerToggle}
                            onChange={handleChangeTab} showFilters={showFilters}
                            tabValue={tabValue}/>
                        <Hidden mdUp>
                            <Drawer
                                variant="temporary"
                                open={mobileOpen}
                                onClose={this.handleDrawerToggle}
                                classes={{
                                paper: classes.drawerPaper,
                                }}
                                ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </Hidden>
                        <Hidden smDown implementation="css">
                            <Drawer
                                variant="permanent"
                                open
                                classes={{
                                paper: classes.drawerPaper,
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </Hidden>
                        <div className={classes.content}>
                            {children}
                            <FloatingButton/>
                        </div>
                    </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({tabValue: state.menu.tabValue})
const mapDispatchToProps = dispatch => bindActionCreators({ handleChangeTab, handleFilter, showData }, dispatch)
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(MenuApp))