import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Recipes from './recipes'

export default props => 
    <Switch>
        <Route exact path='/' component={Recipes} />
        <Redirect from='*' to='/' />
    </Switch>