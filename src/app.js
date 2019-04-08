'use strict'
import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax'
import AppContent from './components/app-content'

class App extends Component {
    constructor() {
        super()
        this.state = {
            userInfo: null,
            repos: [],
            starred: [],
            urlAPI: `https://api.github.com/`
        }
    }

    getGitHubUser(username, detailURI) {
        const localUsername = username ? `/${username}` : ``
        const localdetailURI = detailURI ? `/${detailURI}` : ``
        return `users${localUsername}${localdetailURI}`
    }

    handleSearch(e) {
        const key = e.which || e.keyCode
        if (key === 13) {
            ajax().get(`${this.state.urlAPI}${this.getGitHubUser(e.target.value)}`).then(result => {
                this.setState({
                    userInfo: {
                        username: result.name,
                        repos: result.avatar_url,
                        followers: result.followers,
                        following: result.following,
                        photo: result.avatar_url,
                        login: result.login
                    },
                    repos: [],
                    starred: []
                })
            })
        }
    }

    getRepos(typeRequest) {
        const type = typeRequest
        console.log(type)
        return () => {
            ajax().get(`https://api.github.com/users/${this.state.userInfo.login}/${type}`).then(repos => {
                this.setState({
                    [type]: repos.map(r => { return { name: r.full_name, link: r.clone_url } })
                })
                type==='starred' ? this.setState({repos: []}) : this.setState({starred: []})
            })
        }
    }

    render() {
        return <AppContent
            userInfo={this.state.userInfo}
            repos={this.state.repos}
            getRepos={this.getRepos('repos')}
            getStarred={this.getRepos('starred')}
            handleSearch={(e) => this.handleSearch(e)}
            starred={this.state.starred}
        />
    }
}

export default App