import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectRecipe } from '../actions/recipeActions'
import { withStyles } from '@material-ui/core/styles'
import { MenuList, MenuItem, ListItemText, Paper, Avatar } from '@material-ui/core'
import LocalDining from '@material-ui/icons/LocalDining'
import { Favorite, Whatshot } from '@material-ui/icons'
import { ClockFast, Snowflake, Basecamp, Beer, Bowl, Carrot,
    FoodOff, Sausage, Rice, Fish, Muffin, Pizza  } from 'mdi-material-ui'

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
        <MenuApp showFilters={true} >
          <div style={{paddingTop: 80}}>
        <Paper className={classes.root}>
  
                {recipes.map(r => {
                  let count = 0
                  const categorias = r.tags.map(t => {
                    if( t === 'Quentes'){
                      return <i key={count++}><Whatshot/> Quente  </i>
                    } else if (t === 'Frias') {
                      return <i key={count++}><Snowflake/> Fria  </i>
                    } else if (t === 'Favoritas') {
                      return <i key={count++}><Favorite/> Fria  </i>
                    } else if (t === 'Rápidas') {
                      return <i key={count++}><ClockFast/> Rápida  </i>
                    } else if( t === 'Carnes') {
                      return <i key={count++}><Sausage/> Carne </i>
                    } else if ( t === 'Massas') {
                      return <i key={count++}><Pizza/> Massa  </i>
                    } else if( t === 'Acompanhamentos') {
                      return <i key={count++}><Rice/>  Acompanhamento  </i>
                    } else if( t === 'Frutos do Mar') {
                      return <i key={count++}><Fish/>  Fruto do Mar  </i>
                    } else if( t === 'Sopas') {
                      return <i key={count++}><Bowl/>  Sopa  </i>
                    } else if( t === 'Vegetarianas') {
                      return <i key={count++}><Muffin/>  Vegetariana  </i>
                    } else if( t === 'Veganas') {
                      return <i key={count++}><Carrot/>  Vegana  </i>
                    } else if( t === 'Low Carb') {
                      return <i key={count++}><FoodOff/>  Low Carb  </i>
                    } else if( t === 'Sobremesas') {
                      return <i key={count++}><Basecamp/>  Sobremesa  </i>
                    } else if( t === 'Bebidas') {
                      return <i key={count++}><Beer/>  Bebida  </i>
                    } else {
                      return false
                    }
                  })
                  return (
                    <MenuList key={r._id}>
                        <MenuItem className={classes.item} 
                            onClick={() => selectRecipe(r)}>
                          <Avatar><LocalDining/></Avatar>
                          <ListItemText primary={r.nome} style={{width: 150}} 
                            secondary={categorias} />
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