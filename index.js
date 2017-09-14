import React from 'react'
import { render } from 'react-dom'
import {Provider} from 'rect-redux'
import {createStore} from 'redux'

import App from './Components/App'

render(
    <App />,
    document.getElementById('root')
)