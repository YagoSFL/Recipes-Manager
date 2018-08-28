import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectRecipe } from '../actions/recipeActions'
import { withStyles } from '@material-ui/core/styles'
import { MenuList, MenuItem, ListItemText, Paper, Avatar } from '@material-ui/core'
import LocalDining from '@material-ui/icons/LocalDining'
import Icon from  '../common/icons'

import MenuApp from '../common/menu'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  item: {
    padding: 20
  }
});

const RecipesList = props => {
      
      const { classes, tabValue, lista, selectRecipe } = props
      const salgada = receita => receita.tipo  === 'Salgada'
      const doce = receita => receita.tipo === 'Doce'
      const recipes = tabValue === 0 ? lista.filter(salgada) : lista.filter(doce)
  
      return (
        <MenuApp showFilters={true} route='/Cadastro'>
          <div style={{paddingTop: 80}}>
        <Paper className={classes.root}>
  
                {recipes.map(r => {
                  let categorias = r.tags.map(t => (
                    <i key={t}><Icon icone={t}/> {t}</i>
                  ))
                  return (
                    <MenuList key={r._id}>
                        <MenuItem className={classes.item} 
                            onClick={() => selectRecipe(r)}>
                          <Avatar><LocalDining/></Avatar>
                          <ListItemText primary={r.nome} style={{width: 150}} 
                            secondary={categorias}/>
                        </MenuItem>
                    </MenuList>
                  );
                })}
          
        </Paper>
        </div>
        </MenuApp>
      )
}

const mapStateToProps = state => ({lista: state.recipe.lista, tabValue: state.menu.tabValue})
const mapDispatchToProps = dispatch => bindActionCreators({ selectRecipe }, dispatch)
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(RecipesList))