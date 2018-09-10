import React, { Component } from 'react'
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Field, FieldArray } from 'redux-form'
import { TextField, Button, List, ListItem, ListSubheader,
  Tooltip } from '@material-ui/core'
import {Add} from '@material-ui/icons'
import {Minus} from 'mdi-material-ui'
import If from '../../common/if'

const styles = theme => ({
    addColor: {
        marginLeft: 10,
        backgroundColor: '#B71C1C',
        '&:hover': {
          backgroundColor: '#C62828'
        },
        color: '#FAFAFA',
      },
    trashColor: {
        marginLeft: 10,
        backgroundColor: '#757575',
        '&:hover': {
          backgroundColor: '#9E9E9E'
        },
        color: '#FAFAFA'
      },
    procField: {
      width: '40%'
    },
    qtdField: {
      [theme.breakpoints.down('sm')]: {
        width: '20%'
      }
    },
    extendedIcon: {
      marginRight: 5
    }
})

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#B71C1C'
    }
  }
})

class ItemFields extends Component {

  render(){

    const { classes, processo, field, width, input } = this.props

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
  
    const renderProcess = ({ fields }) => 
      (
        <List>
          <ListItem >
            <Tooltip title='Novo Processo'>
            <Button variant='extendedFab' 
            onClick={() => fields.push({})} 
            className={classes.addColor}>
              <Add className={classes.extendedIcon}/>
              Processo
            </Button>
            </Tooltip>
          </ListItem>
          
          {fields.map((proc, index) =>
            <ListSubheader key={index} disableSticky style={{paddingTop: 20}}>
              <Field
                name={`${proc}.etapa`}
                component={renderTextField}
                label="Processo" 
                className={classes.procField}/>
                <Tooltip title='Remover Processo'>
                <Button variant='fab' 
                  mini onClick={() => fields.remove(index)} 
                  className={classes.trashColor}>
                  <Minus/>
                </Button>
                </Tooltip>
              <FieldArray name={`${proc}.${field}`} component={renderItems}/>
            </ListSubheader>
          )}
        </List>
      )
    const renderItems = ({ fields }) => (
      <List style={{margin: 0}}>
      <ListItem>
        <Tooltip title='Add Ingrediente'>
          <Button variant='extendedFab' 
            onClick={() => fields.push()} 
            className={classes.addColor}>
            <Add className={classes.extendedIcon}/>
            {input}
          </Button>
        </Tooltip>
      </ListItem>
        {fields.map((item, index) =>
          <ListItem key={index}>
          {`${index + 1}. `}
          <If teste={field === 'ingredientes'}>
            <Field
              name={`${item}.qtd`}
              component={renderTextField}
              label='Qtd'
              style={{marginRight: 10}}
              className={classes.qtdField}/>
            </If>
            <Field
              name={`${item}.desc`}
              component={renderTextField}
              multiline
              rowsMax="4"
              label={input}
              style={width}/>
              <Tooltip title='Remover Ingrediente'>
              <Button variant='fab' 
                mini onClick={() => fields.remove(index)}
                className={classes.trashColor}>
                <Minus/>
              </Button>
              </Tooltip>
              
          </ListItem>
        )}
      </List>
    )

    return <div>
        <FieldArray name={processo} 
          component={renderProcess}
          field={field}
          width={width}
          input={input} 
        />
    </div>
  }
}

export default withStyles(styles)(ItemFields)