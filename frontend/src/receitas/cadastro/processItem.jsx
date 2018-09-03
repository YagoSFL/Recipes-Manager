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
        return <div>
            <Field component={renderTextField} name='procedimentos[0].etapa' id='etapa' label='Processo'/>
            <Button variant='fab' mini ><Add/></Button>
            <Button variant='fab' mini ><Delete/></Button>
            {this.props.children}
        </div>

    }
    
    render() {
        return <div>
            {this.renderProcess()}
        </div>
    }
}


export default withStyles(styles)(ProcessItem)

