import React from 'react'
import { Switch, Route, Redirect } from 'react-router' 

import Recipes from './recipes'
import Cadastro from './cadastro'

export default props => 
    <Switch>
        <Route exact path='/' component={Recipes} />
        <Route path='/Cadastro' component={Cadastro} />
        <Redirect from='*' to='/' />
    </Switch>