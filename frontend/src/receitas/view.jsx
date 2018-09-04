import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { formEditRecipe } from '../actions/recipeActions'
import { Typography, Paper, Grid, Tooltip, List, ListItem, ListItemText,
  Grow } from '@material-ui/core'
import { AvTimer } from '@material-ui/icons'
import { normalize, schema } from 'normalizr'
import MenuApp from './menu/menu'
import Icon from '../common/icons'

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      padding: 30,
      paddingLeft: 100,
      paddingRight: 100,
      color: '#212121',
      [theme.breakpoints.down('sm')]: {
        padding: 10,
        paddingLeft: 50,
        paddingRight: 30,
      }
    },
    titles: {
        textAlign: 'center',
        color: '#212121',
        [theme.breakpoints.down('sm')]: {
          fontSize: 30
        }
    },
    subtitles: {
      color: '#212121',
      [theme.breakpoints.down('sm')]: {
        fontSize: 20
      }
  },
    description: {
        textAlign: 'center',
        padding: 10,
        [theme.breakpoints.down('sm')]: {
          marginLeft: 20
        }
    },
    info: {
      padding: 15,
    }
  })

const RecipeView = props => {

  const { classes, recipe, formEditRecipe } = props
  
  if (props.recipe){
    
      const receita = new schema.Entity('recipes');
      const mySchema = { recipes: [ receita ] }
      const normalizedData = normalize(recipe, mySchema);

    const renderIngredients = () => {
      const processo = normalizedData.result.processos || []
      return processo.map(p => (
        <div key={p._id}>
          <Typography variant='headline' className={classes.subtitles}>{p.etapa}</Typography>
            <List>
              {
                p.ingredientes.map(li => (
                  <ListItem key={li._id}>
                    <Typography variant='body2'>
                        <ListItemText>{li.qtd} - {li.nome}</ListItemText>
                    </Typography>
                  </ListItem>
                ))
              }
            </List>
         </div>    
      ))
    }

    const renderTodo = () => {
      const processo = normalizedData.result.processos || []
      let cont = 0
      return processo.map(p => (
        <div key={p._id}>
          <Typography variant='headline' className={classes.subtitles}>{p.etapa}</Typography>
            <List>
              {
                p.preparos.map(li => {
                  cont++
                  return (
                    <ListItem key={li._id}>
                      <Typography variant='body2'>
                          <ListItemText>{cont}. {li.descricao}</ListItemText>
                      </Typography>
                    </ListItem>
                  )
                })
              }
            </List>
         </div>    
      ))
    }

    const tags = recipe.tags ?
    recipe.tags.map(t => (
      <Tooltip title={t} key={t}><Icon icone={t}/></Tooltip>
    )) : []
  
    return (
        <MenuApp showFilters={false} clickAction={() => formEditRecipe(normalizedData.result)}>
        <Grow in={recipe !== null}>
            <div style={{paddingTop: 50}}>
            <Paper className={classes.root}>
                <Grid container spacing={32}>
                    <Grid item md={12}>
                    <Typography variant='display3' className={classes.titles}>
                        {recipe.nome}
                    </Typography>
                    </Grid>
                    <Grid item md={4} sm={12} className={classes.description}>
                    <Typography variant='title' className={classes.subtitles}>
                        Rendimento
                    </Typography>
                    <div className={classes.info}>
                      <Typography variant='body2'>
                        Porção: {recipe.porcao}g
                      </Typography>
                      <Typography variant='body2'>
                        Serve até: {recipe.rendimento} Pessoas
                      </Typography>
                    </div>
                    </Grid>
                    <Grid item md={4} sm={12} className={classes.description}>
                    <Typography variant='title' className={classes.subtitles}>
                        Tempo de Preparo
                    </Typography>
                    <Typography variant='body2' className={classes.info}>
                      <AvTimer/> {recipe.tempo} min
                    </Typography>
                    </Grid>
                    <Grid item md={4} sm={12} className={classes.description}>
                    <Typography variant='title' className={classes.subtitles}>
                        Características
                    </Typography>
                      <div className={classes.info}>
                        {tags}
                      </div>
                    </Grid>
                    <Grid item md={12}>
                    <Typography variant='display2' className={classes.titles}>
                        Ingredientes
                    </Typography>
                      {renderIngredients()}
                    </Grid>
                    <Grid item md={12}>
                    <Typography variant='display2' className={classes.titles}>
                        Modo de Preparo
                    </Typography>
                      {renderTodo()}
                    </Grid>
                </Grid>
            </Paper>
            </div>
            </Grow>
        </MenuApp>
    )
  }
}




const mapStateToProps = state => ({recipe: state.recipe.currentRecipe})
const mapDispatchToProps = dispatch => bindActionCreators({ formEditRecipe }, dispatch)
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(RecipeView))
