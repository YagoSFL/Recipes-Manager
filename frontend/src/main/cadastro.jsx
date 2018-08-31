import React, {Fragment, Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { createRecipe } from '../actions/recipeActions'
import Form from '../common/cadastro/form'
import If from '../common/if'

class Cadastro extends Component {


    render() {

        const { visible } = this.props
        console.log(visible)
        return (
            <Fragment>
                <If teste={visible === 'default'}>
                <Form onSubmit={this.props.createRecipe}/>
                </If>
                <If teste={visible === 'Editar'}>
                <Form />
                </If>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({visible: state.recipe.visible})
const mapDispatchToProps = dispatch => bindActionCreators({ createRecipe }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Cadastro)