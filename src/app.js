'use strict'
import React from 'react'

const App = () => (
    <div className="app">
        <div className="user-info">
            <img src="http://avatars.githubusercontent.com/u/21299201?v=3" />

            <h1><a href="https://viniciusrc15.github.io/portfolio-viniciusrc/">Vinicius Castro</a></h1>

            <ul className="repos-info">
                <li>- Repositorios: 122</li>
                <li>- Seguidores: 122</li>
                <li>- Seguindo: 122</li>
            </ul>

            <div className="actions">
                <button>Ver repositorios</button>
                <button>Ver Favoritos</button>
            </div>

            <div className="repos">
                <h2>Repositorios</h2>

                <ul>
                    <li><a href="#"> Nome do repositorio</a></li>
                </ul>
            </div>
            <div className="starred">
                <h2>Favoritos</h2>

                <ul>
                    <li><a href="#"> Nome do repositorio</a></li>
                </ul>
            </div>
        </div>
    </div>
)

export default App