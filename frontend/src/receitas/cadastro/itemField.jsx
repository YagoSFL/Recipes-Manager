import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Field, FieldArray } from 'redux-form'
import { TextField, Button, List, ListItem, ListSubheader,
  Tooltip } from '@material-ui/core'
import {Delete, Add} from '@material-ui/icons'
import If from '../../common/if'

const styles = theme => ({
    AddColor: {
        marginLeft: 10,
        backgroundColor: '#B71C1C',
        '&:hover': {
          backgroundColor: '#C62828'
        },
        color: '#FAFAFA',
      },
    TrashColor: {
        marginLeft: 10,
        backgroundColor: '#757575',
        '&:hover': {
          backgroundColor: '#9E9E9E'
        },
        color: '#FAFAFA'
      },
    ProcField: {
      width: '40%'
    }
})

class ItemFields extends Component {

  render(){

    const { classes, processo, field, width, input } = this.props

    const renderTextField = ({
      input,
      ...custom
    }) => (
      <TextField
        {...input}
        {...custom}
      />
    )
  
    const renderProcess = ({ fields }) => 
      (
        <List>
          <ListItem >
            <Tooltip title='Novo Processo'>
            <Button variant='fab' 
            mini 
            onClick={() => fields.push({})} 
            className={classes.AddColor}>
              <Add/>
            </Button>
            </Tooltip>
          </ListItem>
          
          {fields.map((proc, index) =>
            <ListSubheader key={index} disableSticky style={{paddingTop: 20}}>
              <Field
                name={`${proc}.etapa`}
                component={renderTextField}
                label="Processo" 
                className={classes.ProcField}/>
                <Tooltip title='Remover Processo'>
                <Button variant='fab' 
                  mini onClick={() => fields.remove(index)} 
                  className={classes.TrashColor}>
                  <Delete/>
                </Button>
                </Tooltip>
              <FieldArray name={`${proc}.${field}`} component={renderItems}/>
            </ListSubheader>
          )}
        </List>
      )
    const renderItems = ({ fields }) => (
      <List style={{margin: 0}}>
        {fields.map((item, index) =>
          <ListItem key={index}>
          <If teste={field === 'ingredientes'}>
            <Field
              name={`${item}.qtd`}
              component={renderTextField}
              label='Qtd'
              style={{marginRight: 10}}/>
            </If>
            {`${index + 1}. `}
            <Field
              name={`${item}.desc`}
              component={renderTextField}
              label={input}
              style={width}/>
              <Tooltip title='Remover Ingrediente'>
              <Button variant='fab' 
                mini onClick={() => fields.remove(index)}
                className={classes.TrashColor}>
                <Delete/>
              </Button>
              </Tooltip>
              <Tooltip title='Add Ingrediente'>
              <Button variant='fab' 
                mini 
                onClick={() => fields.push()} 
                className={classes.AddColor}>
                <Add/>
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