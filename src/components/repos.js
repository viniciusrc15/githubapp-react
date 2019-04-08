'use strict'

import React from 'react'

const Repos = ({ className, title, repos }) => (
    
    <div className={className}>
        <h2>{title}</h2>
        <ul>
            {repos.map((repo, index) => {
               return <li key={index}><a href={repo.link} target='_blank'>{repo.name} </a></li>
            })}
        </ul>
    </div>
)

Repos.defaultProps = {
    className: '',
    title: ''
}

Repos.PropTypes = {
    className: React.PropTypes.string,
    tile: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array
}

export default Repos