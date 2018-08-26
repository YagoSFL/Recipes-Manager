import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { Typography, Paper, Grid, Tooltip, List, ListItem, ListItemText } from '@material-ui/core'
import { Favorite, Whatshot, AvTimer } from '@material-ui/icons'
import { ClockFast, Snowflake, Basecamp, Beer, Bowl, Carrot,
    FoodOff, Sausage, Rice, Fish, Muffin, Pizza  } from 'mdi-material-ui'
import { normalize, schema } from 'normalizr'
import MenuApp from '../common/menu'

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
        fontWeight: 'bold',
        color: '#212121',
        [theme.breakpoints.down('sm')]: {
          fontSize: 30
        }
    },
    subtitles: {
      fontWeight: 'bold',
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
      fontWeight: 'bold'
    }
  })

const RecipeView = props => {

  const { classes, recipe } = props
  
  if (props.recipe){
    
      const receita = new schema.Entity('recipes');
      const mySchema = { recipes: [ receita ] }
      const normalizedData = normalize(recipe, mySchema);

    //console.log(normalizedData.result)
    const renderIngredients = () => {
      const ingredients = normalizedData.result.ingredientes || []
      
      return ingredients.map(p => (
        <div key={p._id}>
          <Typography variant='headline' className={classes.subtitles}>{p.etapa}</Typography>
            <List>
              {
                p.list.map(li => (
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
      const proceeds = normalizedData.result.procedimentos || []
      let cont = 0
      return proceeds.map(p => (
        <div key={p._id}>
          <Typography variant='headline' className={classes.subtitles}>{p.etapa}</Typography>
            <List>
              {
                p.list.map(li => {
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

    let count = 0
    const tags = recipe.tags ?
    recipe.tags.map(t => {
      if( t === 'Quentes'){
        return <Tooltip title='Quente' key={count++}><Whatshot/></Tooltip>
      } else if (t === 'Frias') {
        return <Tooltip key={count++} title='Fria'><Snowflake/></Tooltip>
      } else if (t === 'Favoritas') {
        return <Tooltip key={count++} title='Favorita'><Favorite/></Tooltip>
      } else if (t === 'Rápidas') {
        return <Tooltip key={count++} title='rápida'><ClockFast/></Tooltip>
      } else if( t === 'Carnes') {
        return <Tooltip key={count++} title='Carne'><Sausage/></Tooltip>
      } else if ( t === 'Massas') {
        return <Tooltip key={count++} title='Massa'><Pizza/></Tooltip>
      } else if( t === 'Acompanhamentos') {
        return <Tooltip key={count++} title='Acompanhamento'><Rice/></Tooltip>
      } else if( t === 'Frutos do Mar') {
        return <Tooltip key={count++} title='Frutos do Mar'><Fish/></Tooltip>
      } else if( t === 'Sopas') {
        return <Tooltip key={count++} title='Sopa'><Bowl/></Tooltip>
      } else if( t === 'Vegetarianas') {
        return <Tooltip key={count++} title='Vegetariana'><Muffin/></Tooltip>
      } else if( t === 'Veganas') {
        return <Tooltip key={count++} title='Vegana'><Carrot/></Tooltip>
      } else if( t === 'Low Carb') {
        return <Tooltip key={count++} title='Low Carb'><FoodOff/></Tooltip>
      } else if( t === 'Sobremesas') {
        return <Tooltip key={count++} title='Sobremesa'><Basecamp/></Tooltip>
      } else if( t === 'Bebidas') {
        return <Tooltip key={count++} title='Bebida'><Beer/></Tooltip>
      } else {
        return false
      }
    }) : []
  
    return (
        <MenuApp showFilters={false}>
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
        </MenuApp>
    )
  }
}




const mapStateToProps = state => ({recipe: state.recipe.currentRecipe})
export default withStyles(styles)(connect(mapStateToProps, null)(RecipeView))
