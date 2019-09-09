import { useState, useEffect } from 'react'

function useStateShare(inter = ''){
    console.log('================================inter::', inter)
    const [state, setState] = useState(inter)
    useEffect(() => {
        setState(inter)
    }, [inter])
    console.log('================================state::', state)
    return [state, setState]
}
export default useStateShare
