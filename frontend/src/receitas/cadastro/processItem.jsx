import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, arrayInsert, arrayRemove } from 'redux-form'
import { TextField, Button, Zoom, Grid } from '@material-ui/core'
import {Delete, Add} from '@material-ui/icons'

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

class ProcessItem extends Component {

    renderProcess() {
      const procs = this.props.processo || []
        return procs.map((procN, procI) => (
          <div key={procI}>
            <Field component={renderTextField} name={`processos[${procI}].etapa`} id='etapa' label='Processo'/>
            <Button variant='fab' mini ><Add/></Button>
            <Button variant='fab' mini ><Delete/></Button>
            {
              procN.ingredientes.map((ingr, ingrI) => (
                <div key={ingrI}>
                <Field component={renderTextField} name={`processos[${procI}].ingredientes[${ingrI}].qtd`} label='Qtd'/>
                <Field component={renderTextField} name={`processos[${procI}].ingredientes[${ingrI}].nome`} label='Ingrediente'/>
                <Button variant='fab' mini ><Add/></Button>
                <Button variant='fab' mini ><Delete/></Button>
                </div>
              ))
            }
          </div>
        ))

    }
    
    render() {
        return <div>
            {this.renderProcess()}
        </div>
    }
}


export default withStyles(styles)(ProcessItem)

