import React, { useReducer } from 'react'
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }

        case 'decrement':
            if (state.count <= 0) {
                return { count: 0 }
            } else return { count: state.count - 1 }


        case 'reset':
            return { count: 0 }

        default:
            return state
    }
}
const CounterUsingReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    return (
        <div className='flex justify-center'>
            <div className='border p-5 rounded'>
                <h2 className='text-center font-semibold text-2xl mb-5'>Conter:</h2>
                <div className='flex gap-3 items-center'>

                    <button onClick={() => dispatch({ type: 'increment' })} className='px-2 py-1 rounded-lg bg-gray-300'>+</button>
                    <h2 className='text-xl font-semibold'>Count: {state.count}</h2>
                    <button onClick={() => dispatch({ type: 'decrement' })} className='px-3 py-1 rounded-lg bg-gray-300'>-</button>
                    <button onClick={() => dispatch({ type: 'reset' })} className='px-2 py-1 bg-gray-200 rounded-lg'>Reset</button>

                </div>
            </div>
        </div>

    )
}

export default CounterUsingReducer