import React, { useRef, } from 'react'

const UseRefComponent = () => {
    const inputRef = useRef(null)
    // const [savedValue,setSavedvalue]=useState('')
    const handleSave = () => {
        const value = inputRef
        console.log(value)
    }
    return (
        <div>
            <input className='border' ref={inputRef} type="text" />
            <button onClick={() => handleSave()}>save</button>
        </div>
    )
}

export default UseRefComponent