import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { init } from '../../actions/recipeActions'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { Typography, Grid, TextField, Button, Checkbox, Tooltip,
  Radio, RadioGroup, FormControlLabel } from '@material-ui/core'
import { AvTimer, Person } from '@material-ui/icons'
import { Scale } from 'mdi-material-ui'
import ItemField from './itemField'
import ProcessItem from './processItem'
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
    submit: {
      float: 'right',
      position: 'relative',
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
    }
  })

  const renderTextField = ({
    input,
    ...custom
  }) => (
    <TextField
      {...input}
      {...custom}
    />
  )

  const renderCheckboxGroup = ({ name, options,  input, meta, ...custom}) => {
    let tags = options.map((tag, i) => (
      <Tooltip key={i} title={tag}>
        <Checkbox
          name={`${name}[${i}]`}
          defaultChecked={input.value.indexOf(tag) !== -1}
          checked={input.value.indexOf(tag) !== -1}
          icon={<Icon icone={tag}/>}
          checkedIcon={<Icon icone={tag}/>}
          onChange={(checked) => {
            let newValue = [...input.value];
            if (checked){
              newValue.push(tag);
            } else {
              newValue.splice(newValue.indexOf(tag), 1);
            }
            return input.onChange(newValue);
          }}
          {...custom}
        />
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
    const { classes, handleSubmit, init, processos, ingredientes } = this.props
    console.log(ingredientes)
    return (
      <form autoComplete='off' onSubmit={handleSubmit}>
        <Grid container spacing={24}>
            <Grid item md={8}>
                <Field component={renderTextField} label='Nome da Receita' name='nome'/>
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
            <ProcessItem processo={processos} field='ingredientes' input={'Ingrediente'}/>
            </Grid>
            <Grid item md={12} className={classes.footer}>
              <Button variant='contained' className={classes.submit}
                type='submit'>Cadastrar</Button>
              <Button variant='contained' className={classes.submit}
                onClick={init}>Cancelar</Button>
            </Grid>
        </Grid>
      </form>              
    )
  }

}
NewRecipe = reduxForm({form: 'newRecipe', destroyOnUnmount: false})(NewRecipe)
const selector = formValueSelector('newRecipe')
const mapStateToProps = state => ({
  processos: selector(state, 'processos'),
  ingredientes: selector(state, 'ingredientes')
})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(NewRecipe))