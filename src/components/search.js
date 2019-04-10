'use strict'

import React, {PropTypes} from 'react'

const Search = ({ handleSearch, disabled }) => (
    <div className="search">
        <input disabled={disabled} type="search" placeholder="Nome do usuário do GitHub" onKeyUp={handleSearch} />
    </div>
)
Search.propTypes = {
    disabled: PropTypes.bool.isRequired,
    handleSearch: PropTypes.func.isRequired
}

export default Search