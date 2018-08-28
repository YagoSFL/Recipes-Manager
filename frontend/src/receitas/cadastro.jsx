import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { Typography, Paper, Grid } from '@material-ui/core'
import { AvTimer } from '@material-ui/icons'
import MenuApp from '../common/menu'
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

const NewRecipe = props => {

  const { classes } = props

    return (
        <MenuApp showFilters={false} route='/' hide={true}>
            <div style={{paddingTop: 50}}>
            <Paper className={classes.root}>
                <Grid container spacing={32}>
                    <Grid item md={12}>
                    <Typography variant='display3' className={classes.titles}>
                        Nome da receita
                    </Typography>
                    </Grid>
                    <Grid item md={4} sm={12} className={classes.description}>
                    <Typography variant='title' className={classes.subtitles}>
                        Rendimento
                    </Typography>
                    <div className={classes.info}>
                      <Typography variant='body2'>
                        Porção: 0g
                      </Typography>
                      <Typography variant='body2'>
                        Serve até: 0 Pessoas
                      </Typography>
                    </div>
                    </Grid>
                    <Grid item md={4} sm={12} className={classes.description}>
                    <Typography variant='title' className={classes.subtitles}>
                        Tempo de Preparo
                    </Typography>
                    <Typography variant='body2' className={classes.info}>
                      <AvTimer/> 0 min
                    </Typography>
                    </Grid>
                    <Grid item md={4} sm={12} className={classes.description}>
                    <Typography variant='title' className={classes.subtitles}>
                        Características
                    </Typography>
                      <div className={classes.info}>
                        select tags
                      </div>
                    </Grid>
                    <Grid item md={12}>
                    <Typography variant='display2' className={classes.titles}>
                        Ingredientes
                    </Typography>
                      Teste
                    </Grid>
                    <Grid item md={12}>
                    <Typography variant='display2' className={classes.titles}>
                        Modo de Preparo
                    </Typography>
                      Teste
                    </Grid>
                </Grid>
            </Paper>
            </div>
        </MenuApp>
    )
}

export default withStyles(styles)(NewRecipe)
