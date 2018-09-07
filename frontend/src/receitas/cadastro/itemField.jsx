import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, FieldArray } from 'redux-form'
import { TextField, Button, List, ListItem, ListItemText } from '@material-ui/core'
import {Delete, Add} from '@material-ui/icons'
import If from '../../common/if'

const styles = theme => ({
    AddColor: {
        backgroundColor: '#B71C1C',
        '&:hover': {
          backgroundColor: '#C62828'
        },
        color: '#FAFAFA',
      },
    EditColor: {
        backgroundColor: '#FFC107',
        '&:hover': {
          backgroundColor: '#FFCA28'
        },
        color: '#FAFAFA'
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

  const renderProcess = ({ fields }) => (
    <List>
      <ListItem>
        <Button variant='fab' mini onClick={() => fields.push({})}><Add/></Button>
      </ListItem>
      {fields.map((proc, index) =>
        <ListItem key={index}>
          <Field
            name={`${proc}.etapa`}
            component={renderTextField}
            label="Processo"/>
            <Button variant='fab' mini onClick={() => fields.remove(index)}><Delete/></Button>
          <FieldArray props={`${proc}.ingredientes`} component={renderItems}/>
        </ListItem>
      )}
    </List>
  )
  
  const renderItems = ({ fields }) => (
    <List>
      <ListItem>
        <Button variant='fab' mini onClick={() => fields.push()}><Add/></Button>
      </ListItem>
      {fields.map((ingrediente, index) =>
        <ListItem key={index}>
          <Field
            name={`${ingrediente}.qtd`}
            component={renderTextField}
            label='Qtd'/>
          <Field
            name={`${ingrediente}.desc`}
            component={renderTextField}
            label='Ingrediente'/>
            <Button variant='fab' mini onClick={() => fields.remove(index)}><Delete/></Button>
        </ListItem>
      )}
    </List>
  )

class ItemFields extends Component {

  render(){

    const { processo } = this.props

    return <div>
        <FieldArray props={processo} component={renderProcess} />
    </div>
  }
}

export default ItemFields