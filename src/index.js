'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app'

const renderApp = (NextApp) => {
    render(
        <AppContainer>
            <NextApp />
        </AppContainer>,
        document.querySelector('[data-js="app"]')
    )
}

renderApp(App)

if (module.hot) { // verifica o hot para funfar somente em dev
    module.hot.accept('./app', () => { // atualiza o app global somente oq precisa
        const NextApp = require('./app').default
        renderApp(NextApp)
    })
}