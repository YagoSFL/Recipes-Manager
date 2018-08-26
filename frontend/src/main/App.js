import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'

export default props => (

    <BrowserRouter>
        <Fragment>
            <Routes />
        </Fragment>
    </BrowserRouter>
)
