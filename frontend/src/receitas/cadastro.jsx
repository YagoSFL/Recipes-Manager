import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { handleFilter } from '../actions/recipeActions'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { Typography, Paper, Grid, TextField, Checkbox, 
  FormControlLabel, FormGroup, Tooltip } from '@material-ui/core'
import { AvTimer, Person } from '@material-ui/icons'
import { Scale } from 'mdi-material-ui'
import MenuApp from '../common/menu'
import Icon from '../common/icons'
import tags from '../common/arrayTags'

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
        padding: 10,
        [theme.breakpoints.down('sm')]: {
          marginLeft: 20
        }
    },
    colorChek: {
      color: '#F5F5F5',
      '&$colorChecked': {
        color: '#B71C1C'
      },
    },
    colorChecked: {}
  })

class NewRecipe extends Component {

  render() {
    const { classes, handleFilter } = this.props
   
    return (
        <MenuApp showFilters={false} route='/' hide={true}>
            <div style={{paddingTop: 50}}>
            <Paper className={classes.root}>
              <form autoComplete='off'>
                <Grid container spacing={32}>
                    <Grid item md={12}>
                        <Field component={TextField} margin='normal' label='Nome da Receita'
                          id='receita' name='receita'/>
                    </Grid>
                    <Grid item md={4} sm={12} className={classes.description}>
                    <Typography variant='title' className={classes.subtitles}>
                        Rendimento
                    </Typography>
                    <div className={classes.info}>
                      <Typography variant='body2'>
                        <Field component={TextField} margin='normal' label='Porção (g)'
                          id='porcao' name='porcao' type='number'/> <Scale/>
                      </Typography>
                      <Typography variant='body2'>
                        <Field component={TextField} margin='normal' label='Serve até (pessoas)'
                          id='rendimento' name='rendimento' type='number'/> <Person/>
                      </Typography>
                    </div>
                    </Grid>
                    <Grid item md={4} sm={12} className={classes.description}>
                    <Typography variant='title' className={classes.subtitles}>
                        Tempo de Preparo
                    </Typography>
                    <Typography variant='body2' className={classes.info}>
                      <Field component={TextField} margin='normal' label='Minutos'
                          id='tempo' name='tempo' type='number'/> <AvTimer/> 
                    </Typography> 
                    </Grid>
                    <Grid item md={4} sm={12} className={classes.description}>
                    <Typography variant='title' className={classes.subtitles}>
                        Características
                    </Typography>
                      <div className={classes.info}>
                        <FormGroup row>
                          {tags.map(tag => {
                            return <Tooltip title={tag}>
                              <FormControlLabel
                              control={
                                <Checkbox value={tag} onChange={handleFilter}
                                  classes={{checked: classes.colorChecked,
                                    check: classes.colorCheck}}/>
                              }
                              label={<Icon icone={tag}/>}
                              />
                            </Tooltip>
                          })}
                        </FormGroup>
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
                </form>
            </Paper>
            </div>
        </MenuApp>
    )
  }


}

NewRecipe = reduxForm({form: 'newRecipe', destroyOnUnmount: false})(NewRecipe)
const mapDispatchToProps = dispatch => bindActionCreators({handleFilter}, dispatch)
export default withStyles(styles)(connect(null, mapDispatchToProps)(NewRecipe))
