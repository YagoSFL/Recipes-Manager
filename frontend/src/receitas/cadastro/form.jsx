import React, {Component} from 'react'
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { init } from '../../actions/recipeActions'
import { reduxForm, Field } from 'redux-form'
import { Typography, Grid, TextField, Button, Checkbox, Tooltip,
  Radio, RadioGroup, FormControlLabel } from '@material-ui/core'
import { AvTimer, Person } from '@material-ui/icons'
import { Scale } from 'mdi-material-ui'
import ItemFields from './itemField'
import Icon from '../../common/icons'
import tags from '../../common/arrayTags'

const styles = theme => ({
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
    Submit: {
      marginLeft: 10,
      float: 'Right',
      backgroundColor: '#B71C1C',
      '&:hover': {
        backgroundColor: '#C62828'
      },
      color: '#FAFAFA',
    },
  Cancel: {
      marginLeft: 10,
      float: 'Right',
      backgroundColor: '#757575',
      '&:hover': {
        backgroundColor: '#9E9E9E'
      },
      color: '#FAFAFA'
    },
    footer: {
      padding: 20
    },
    check: {
      color: '#9E9E9E',
      '&$checked': {
        color: '#B71C1C',
      },
    },
    checked: {},
    type: {
      marginLeft: 15
    },
    cssLabel: {
      '&$cssFocused': {
        color: '#B71C1C',
      },
    },
    cssFocused: {},
    cssUnderline: {
      '&:after': {
        borderBottomColor: '#B71C1C',
      },
    },
  })

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#B71C1C'
      }
    }
  })

  const renderTextField = ({
    input,
    ...custom
  }) => (
    <MuiThemeProvider theme={theme}>
      <TextField
        {...input}
        {...custom}
      />
    </MuiThemeProvider>
  )

  const renderCheckboxGroup = ({ required, options, input, meta, ...custom}) => {
    let tags = options.map((tag, i) => (
      <Tooltip key={i} title={tag}>
        <Checkbox
          name={`${tag}[${i}]`}
          value={tag}
          checked={input.value.indexOf(tag) !== -1}
          icon={<Icon icone={tag}/>}
          checkedIcon={<Icon icone={tag}/>}
          onChange={(event) => {
              const newValue = [...input.value];
              if (event.target.checked) {
                  newValue.push(tag);
              } else {
                  newValue.splice(newValue.indexOf(tag), 1);
              }
              return input.onChange(newValue);
          }}
          {...custom}/>                           
      </Tooltip >
      
    ));
    return (
      <div>
        {tags}
      </div>
    );
  }

  const renderRadioGroup = ({ input, ...rest }) => (
    <RadioGroup
      {...input}
      {...rest}
      selected={input.value}
      defaultChecked={input.value}
      onChange={(event, value) => input.onChange(value)}
    />
  )

class NewRecipe extends Component {

  render() {
    const { classes, handleSubmit, init, buttonLabel } = this.props
 
    return (
      <form autoComplete='off' onSubmit={handleSubmit}>
        <Grid container spacing={16}>
            <Grid item md={8}>
                <Field component={renderTextField} label='Nome da Receita' name='nome'
                    style={{width: '100%'}}/>
            </Grid>
            <Grid item md={4}>
                <Typography variant='title' className={classes.subtitles}>
                  Tipo
                </Typography>
                <Field component={renderRadioGroup} name='tipo' className={classes.type}>
                  <FormControlLabel value="Doce" control={<Radio classes={{
                  root: classes.check,
                  checked: classes.checked,
                }}/>} label="Doce" />
                  <FormControlLabel value="Salgada" control={<Radio classes={{
                  root: classes.check,
                  checked: classes.checked,
                }}/>} label="Salgada" />
                </Field>
            </Grid>  
            <Grid item md={4} sm={12} className={classes.description}>
            <Typography variant='title' className={classes.subtitles}>
                Rendimento
            </Typography>
            <div>
              <Typography variant='body2'>
                <Field component={renderTextField} margin='normal' label='Porção (g)'
                  id='porcao' name='porcao' type='number'/> <Scale/>
              </Typography>
              <Typography variant='body2'>
                <Field component={renderTextField} margin='normal' label='Serve até (pessoas)'
                  id='rendimento' name='rendimento' type='number'/> <Person/>
              </Typography>
            </div>
            </Grid>
            <Grid item md={4} sm={12} className={classes.description}>
            <Typography variant='title' className={classes.subtitles}>
                Tempo de Preparo
            </Typography>
            <Typography variant='body2'>
              <Field component={renderTextField} margin='normal' label='Minutos'
                  id='tempo' name='tempo' type='number'/> <AvTimer/> 
            </Typography> 
            </Grid>
            <Grid item md={4} sm={12} className={classes.description}>
              <Typography variant='title' className={classes.subtitles}>
                  Características
              </Typography>
              <Field
                name="tags"
                component={renderCheckboxGroup}
                options={tags}
                classes={{
                  root: classes.check,
                  checked: classes.checked,
                }}
              />
            </Grid>
            <Grid item md={12}>
            <Typography variant='display2' className={classes.titles}>
                Ingredientes
            </Typography>
            <ItemFields processo='processos' 
              field='ingredientes' width={{width: '60%'}}
              input='Ingrediente'
            />          
            </Grid>
            <Grid item md={12}>
            <Typography variant='display2' className={classes.titles}>
                Modo de Preparo
            </Typography>
            <ItemFields processo='processos' 
              field='preparos' width={{width: '90%'}}
              input='Descrição'
            />          
            </Grid>
            <Grid item md={12} className={classes.footer}>
              <Button variant='contained' className={classes.Submit}
                type='submit'>{buttonLabel}</Button>
              <Button variant='contained' className={classes.Cancel}
                onClick={init}>Cancelar</Button>
            </Grid>
        </Grid>
      </form>              
    )
  }

}
NewRecipe = reduxForm({form: 'newRecipe', destroyOnUnmount: false})(NewRecipe)
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default withStyles(styles)(connect(null, mapDispatchToProps)(NewRecipe))