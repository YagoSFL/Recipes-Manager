import React, {Fragment, Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { showData, createRecipe } from '../actions/recipeActions'
import If from '../common/if'
import Lista from '../receitas/lista'
import View from '../receitas/view'
import Form from '../receitas/cadastro/form'

class Recipes extends Component {
    
    componentWillMount(){
        this.props.showData()
    }

    render() {

        const { visible } = this.props

        return (
            <Fragment>
                <If teste={visible === 'default'}>
                    <Lista />
                </If>
                <If teste={visible === 'Receita'}>
                    <View />
                </If>
                <If teste={visible === 'Cadastrar'}>
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
const mapDispatchToProps = dispatch => bindActionCreators({ showData, createRecipe }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Recipes)