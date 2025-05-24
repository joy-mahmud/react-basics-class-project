import React, { useEffect, useState } from 'react'

const UseWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)

        // clean up
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return width
}

export default UseWindowWidth