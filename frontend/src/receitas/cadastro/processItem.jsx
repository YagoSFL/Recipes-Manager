import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, arrayInsert, arrayRemove } from 'redux-form'
import { TextField, Button, Zoom, Grid } from '@material-ui/core'
import {Delete, Add} from '@material-ui/icons'
import ItemField from './itemField'
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

class ProcessItem extends Component {

    add(index, item = {} ){
      this.props.arrayInsert('newRecipe', 'processos', index, item)
    }

    remove(index) {
      this.props.arrayRemove('newRecipe', 'processos', index)
    }

    renderProcessField() {
      const { classes, processo } = this.props
      const list = processo || []
      return list.map((item, index) => (
        <div key={index}>
          <Field component={renderTextField} name={`processos[${index}].etapa`} label='Processo'/>
          <Button variant='fab' mini className={classes.AddColor} onClick={() => this.add(index + 1)}><Add/></Button>
          <Button variant='fab' mini onClick={() => this.remove(index)}><Delete/></Button>
        </div>
      ))
    }

    render() {
        return <div>
          {this.renderProcessField()}
        </div>
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({arrayInsert, arrayRemove}, dispatch)
export default withStyles(styles)(connect(null, mapDispatchToProps)(ProcessItem))

