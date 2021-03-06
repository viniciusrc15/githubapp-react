'use strict'
import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax'
import AppContent from './components/app-content'

class App extends Component {
    constructor() {
        super()
        this.handleSearch = this.handleSearch.bind(this)
        this.state = {
            userInfo: null,
            repos: [],
            starred: [],
            isFetching: false,
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
        // const search = e.target
        //search.disable = true;
        if (key === 13) {
            this.setState({ isFetching: true })
            ajax().get(`${this.state.urlAPI}${this.getGitHubUser(e.target.value)}`).then(result => {
                this.setState({
                    userInfo: {
                        username: result.name,
                        repos: result.avatar_url,
                        followers: result.followers,
                        following: result.following,
                        photo: result.avatar_url,
                        repos: result.public_repos,
                        login: result.login
                    },
                    repos: [],
                    starred: []
                })
            }).always(() => {
                this.setState({ isFetching: false })
                // search.disable = false;
            })
        }
    }

    getRepos(typeRequest) {
        const type = typeRequest
        console.log(type)
        return () => {
            ajax().get(`${this.state.urlAPI}${this.getGitHubUser(this.state.userInfo.login, type)}`).then(repos => {
                this.setState({
                    [type]: repos.map(r => { return { name: r.full_name, link: r.clone_url } })
                })
                type === 'starred' ? this.setState({ repos: [] }) : this.setState({ starred: [] })
            })
        }
    }

    render() {
        return <AppContent
            // userInfo={this.state.userInfo}
            // starred={this.state.starred}
            // repos={this.state.repos}
            // isFetching={this.state.isFetching}
            {...this.state} // replace lines comments behind
            getRepos={this.getRepos('repos')}
            getStarred={this.getRepos('starred')}
            // handleSearch={(e) => this.handleSearch(e)}   metodo mais lento
            handleSearch={this.handleSearch} // metodo mais rapido line 9 required
        />
    }
}

export default App