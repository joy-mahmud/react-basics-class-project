import React from 'react'

const ConditionalRendering = () => {
    const show = false
    if (show) {
        return (
            <div>
                <h2>Hello i am from if block</h2>
            </div>
        )
    }
    return (
        <div>
            <h2>Hello i am from conditional component</h2>
        </div>
    )

}

export default ConditionalRendering