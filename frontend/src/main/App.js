import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'
import Messages from '../common/msgs'

export default props => (
    <Fragment>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
        <Messages />
    </Fragment>
    
)
