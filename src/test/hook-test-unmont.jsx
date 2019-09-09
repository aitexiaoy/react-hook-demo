import { useEffect } from 'react'

const sendData = () => {}
const sendOnlineStatus = () => {}

function App() {
    const getData = () => Promise.resolve([])
    
    useEffect(() => {
        document.addEventListener('click', getData)
        document.addEventListener('dblclick', sendData)
        return () => {
            document.removeEventListener('click', getData)
            document.removeEventListener('dblclick', sendData)
        }
    }, [])

    useEffect(() => {
        const time = setTimeout(() => {
            sendOnlineStatus()
        }, 1000)
        return () => {
            clearTimeout(time)
        }
    }, [])
    return null
}

export default App
