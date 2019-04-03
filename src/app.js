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
        console.log('hsgdfhg==>', key)
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

    render() {
        return <AppContent
            userInfo={this.state.userInfo}
            repos={this.state.repos}
            handleSearch={(e) => this.handleSearch(e)}
            starred={this.state.starred}
        />
    }
}

export default App