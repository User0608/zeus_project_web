import { useEffect, useState } from "react"
import { fetchData } from "../services/fetchData"

const useFetchData = (path = "") => {
    const [data, setData] = useState(null)
    const refreshData = async (pth="") => {
        const [res, ok, message] = await fetchData(pth)
        if (!ok) {
            alert(message)  
            return
        } 
        setData(res.data)
    }
    useEffect(() => {
        setData(null)
        refreshData(path) 
    }, [path])
    return [data, ()=>{setData(null);refreshData(path)}]
}

export default useFetchData
