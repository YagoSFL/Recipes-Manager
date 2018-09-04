import React, {Fragment, Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { showData, createRecipe, editRecipe } from '../actions/recipeActions'
import { Paper, Grow } from '@material-ui/core'
import If from '../common/if'
import MenuApp from '../receitas/menu/menu'
import Lista from '../receitas/lista'
import View from '../receitas/view'
import Form from '../receitas/cadastro/form'

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      padding: 30,
      paddingLeft: 100,
      paddingRight: 100,
      color: '#212121',
      [theme.breakpoints.down('sm')]: {
        padding: 10,
        paddingLeft: 50,
        paddingRight: 30,
      }
    },
})

class Recipes extends Component {
    
    componentWillMount(){
        this.props.showData()
    }

    render() {

        const { classes, visible, createRecipe, editRecipe } = this.props

        return (
            <Fragment>
                <If teste={visible === 'default'}>
                    <Lista />
                </If>
                <If teste={visible === 'Receita'}>
                    <View />
                </If>
                <If teste={visible === 'Cadastrar'}>
                    <MenuApp showFilters={false} route='/' hide={true}>
                        <Grow in={visible === 'Cadastrar'}>
                            <div style={{paddingTop: 50}}>
                                <Paper className={classes.root}>
                                    <Form onSubmit={createRecipe}/>
                                </Paper>
                            </div>
                        </Grow>
                    </MenuApp>
                </If>
                <If teste={visible === 'Editar'}>               
                    <MenuApp showFilters={false} route='/' hide={true}>
                        <Grow in={visible === 'Editar'}>
                            <div style={{paddingTop: 50}}>
                                <Paper className={classes.root}>
                                        <Form onSubmit={editRecipe}/>
                                </Paper>
                            </div>
                        </Grow>
                    </MenuApp>
                </If>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({visible: state.recipe.visible})
const mapDispatchToProps = dispatch => bindActionCreators({ showData, createRecipe, editRecipe }, dispatch)
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Recipes))