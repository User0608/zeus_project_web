import { useEffect } from 'react'
import { fetchData } from '../services/fetchData'

export const useSetFetchData = (path = "", setF = () => { }) => {
    async function refresh(apipath = "") {
        const [res, ok, message] = await fetchData(apipath)
        if (!ok) {
            alert(message)
            return
        }
        setF(res.data)
    }
    useEffect(() => {
        refresh(path)
        // eslint-disable-next-line  
    }, [path])
    return [() => { refresh(path) }]
}
