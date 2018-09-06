import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, arrayInsert, arrayRemove } from 'redux-form'
import { TextField, Button, Zoom, Grid } from '@material-ui/core'
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

class ItemField extends Component {

    renderItemField() {
      const { classes, processo, field, input } = this.props
      const list = processo || []
      
     list.map((item, index) => {
        return item.ingredientes.map((desc, ind) => (
          <div key={ind}>
          {console.log(desc)}
          <If teste={field === 'ingredientes'}>
            <Field component={renderTextField} name={`processos[${index}].${field}[${ind}].qtd`} label='Qtd'/>
          </If>
          <Field component={renderTextField} name={`processos[${index}].${field}[${ind}].desc`} label={input}/>
          <Button variant='fab' mini className={classes.AddColor}><Add/></Button>
          <Button variant='fab' mini><Delete/></Button>
        </div>
        ))
      })
    }

    render() {
        return <div>
            {this.renderItemField()}
        </div>
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({arrayInsert}, dispatch)
export default withStyles(styles)(connect(null, mapDispatchToProps)(ItemField))

