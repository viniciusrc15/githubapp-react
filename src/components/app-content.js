'use strict'

import React, { PropTypes } from 'react'
import Search from './search'
import UserInfo from './userInfo'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ userInfo, repos, starred, handleSearch, getRepos, getStarred }) => (
    <div className="app">
        <Search handleSearch={handleSearch} />
        {!!userInfo && <UserInfo userInfo={userInfo} />}
        {!!userInfo && <Actions getRepos={getRepos} getStarred={getStarred}/>}
        {!!repos.length &&
            <Repos
                className="repos"
                title='Repositórios'
                repos={repos}
            />}
        {!!starred.length && <Repos
            className="starred"
            title='Repositórios Favoritos'
            repos={starred}
        />}
    </div>
)

AppContent.propTypes = {
    userInfo: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired,
}

export default AppContent