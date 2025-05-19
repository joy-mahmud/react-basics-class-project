import React from 'react'
import { GrandChildComponent } from './GrandChildComponent'

const ChildComponent = () => {
    return (
        <div>
            <h1>From childComponent</h1>
            <GrandChildComponent ></GrandChildComponent>
        </div>
    )
}

export default ChildComponent