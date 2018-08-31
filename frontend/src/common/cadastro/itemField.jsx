import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, arrayInsert, arrayRemove } from 'redux-form'
import { TextField, Button, Zoom, Grid } from '@material-ui/core'
import {Delete, Add} from '@material-ui/icons'
import If from '../if'

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

class ItemField extends Component {


    renderFields() {
        return <div>
            <Field component={renderTextField} name='qtd' id='qtd' label='Qtd'/>
            <Field component={renderTextField} name='ingrediente' id='ingrediente' label='Ingrediente'/>
            <Button variant='fab' mini ><Add/></Button>
            <Button variant='fab' mini ><Delete/></Button>
        </div>

    }
    
    render() {
        return <div>
            {this.renderFields()}
        </div>
    }
}


export default withStyles(styles)(ItemField)

