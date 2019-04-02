'use strict'

import React from 'react'
import Search from './search'
import UserInfo from './userInfo'
import Actions from './actions'
import Repos from './repos'

const AppContent = () => (
    <div className="app">
        <Search />
        <UserInfo />
        <Actions />
        <Repos
            className="repos"
            title='Repositórios'
            repos={[{ link: '#', name: 'Meu repositorio' }]}
        />
        <Repos
            className="starred"
            title='Repositórios Favoritos'
            repos={[{ link: '#', name: 'Meu repositorio' }]}
        />
    </div>
)

export default AppContent