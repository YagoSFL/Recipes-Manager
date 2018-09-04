import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectRecipe, contentToShow, initForm, removeRecipe } from '../actions/recipeActions'
import { withStyles } from '@material-ui/core/styles'
import { MenuList, MenuItem, ListItemText, Paper, Avatar, Grow,
  ListItemSecondaryAction, IconButton, Dialog, DialogActions,
  DialogContent, DialogContentText, DialogTitle, Button } from '@material-ui/core'
import LocalDining from '@material-ui/icons/LocalDining'
import {Delete} from '@material-ui/icons'
import Icon from  '../common/icons'

import MenuApp from './menu/menu'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  item: {
    padding: 20
  },
  dialogText : {
    color: '#B71C1C',
    fontWeight: 'bold'
  }
});

class RecipesList extends Component {

  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleAccept = (recipe) => {
    this.handleClose()
    return this.props.removeRecipe(recipe)
  }

  handleClose = () => {
    this.setState({ open: false });
  };
      
  render() {
    
    const { classes, tabValue, lista, selectRecipe, initForm  } = this.props
    const salgada = receita => receita.tipo  === 'Salgada'
    const doce = receita => receita.tipo === 'Doce'
    const recipes = tabValue === 0 ? lista.filter(salgada) : lista.filter(doce)

    return (
      <MenuApp showFilters={true} clickAction={() => initForm()}>
      <Grow in={ lista !== [] } >
        <div style={{paddingTop: 80}}>
      <Paper className={classes.root}>
              {recipes.map(r => {
                let categorias = r.tags.map(t => (
                  <i key={t}> <Icon icone={t}/> {t} </i>
                ))
                return (
                  <MenuList key={r._id}>
                      <MenuItem className={classes.item} 
                          onClick={() => selectRecipe(r)}>
                        <Avatar><LocalDining/></Avatar>
                        <ListItemText primary={r.nome} style={{width: 150}} 
                          secondary={categorias}/>
                          <ListItemSecondaryAction>
                            <IconButton aria-label="Delete"  onClick={this.handleClickOpen}>
                              <Delete/>
                            </IconButton>
                          </ListItemSecondaryAction>
                      </MenuItem>
                      <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title" className={classes.dialogText}>
                          Deseja realmente remover esta receita?
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            Depois de apagada seu conteúdo não poder recuperado.
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={this.handleClose} className={classes.dialogText}>
                            Não
                          </Button>
                          <Button onClick={() => this.handleAccept(r)} autoFocus className={classes.dialogText}>
                            Sim
                          </Button>
                        </DialogActions>
                      </Dialog>
                  </MenuList>
                )
              })}
        
      </Paper>
      </div>
      </Grow>
      </MenuApp>
    )
  }
}

const mapStateToProps = state => ({lista: state.recipe.lista, tabValue: state.menu.tabValue})
const mapDispatchToProps = dispatch => bindActionCreators({ 
  selectRecipe, contentToShow, initForm, removeRecipe 
}, dispatch)
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(RecipesList))