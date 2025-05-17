import React from 'react'

const ParentComponent = ({ children }) => {
    return (
        <div>
            <h2>hello</h2>
            {children}
        </div>
    )
}

export default ParentComponent