import React from 'react'

const Filter = ({filterNames, setFilterNames}) => (
        <div>
            Filter shown with:
            <input 
                value={filterNames} 
                onChange={e => setFilterNames(e.target.value)} 
                />
        </div>
    )

export default Filter