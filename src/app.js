'use strict'
import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax'
import AppContent from './components/app-content'

class App extends Component {
    constructor() {
        super()
        this.state = {
            userInfo: {
                username: 'Vinicius',
                repos: 12,
                followers: 30,
                following: 30,
                photo: "http://avatars.githubusercontent.com/u/21299201?v=3",
                login: "viniciusrc15"
            },
            repos: [{
                name: 'Repo',
                link: '#'
            }],
            starred: [{
                name: 'Repo',
                link: '#'
            }]
        }
    }

    handleSearch(e) {
        const key = e.which || e.keyCode
        if (key === 13) {
            ajax().get(`https://api.github.com/users/${e.target.value}`).then(result => {
                this.setState({
                    userInfo: {
                        username: result.name,
                        repos: result.avatar_url,
                        followers: result.followers,
                        following: result.following,
                        photo: result.avatar_url,
                        login: result.login
                    }
                })
            })
        }
    }

    getRepos() {
        console.log('repos')
        ajax().get(`https://api.github.com/users/${this.state.userInfo.login}/repos`).then(repos => {
            console.log(repos)
            this.setState({
                repos: repos.map(r => { return { name: r.full_name, link: r.clone_url } })
            })
            // this.setState({
            //     repos
            // })
        })
    }

    getStarred() {
        console.log('starred')
        ajax().get(`https://api.github.com/users/${this.state.userInfo.login}/repos`).then(starred => {
            this.setState({
                starred: starred.map(r => { return { name: r.full_name, link: r.clone_url } })
            })
        })
    }

    render() {
        return <AppContent
            userInfo={this.state.userInfo}
            repos={this.state.repos}
            getRepos={() => this.getRepos()}
            getStarred={() => this.getStarred()}
            handleSearch={(e) => this.handleSearch(e)}
            starred={this.state.starred}
        />
    }
}

export default App