import { useEffect, useState } from "react"
import { fetchData } from "../services/fetchData"

export const useFetchDataWithLoading = (path = "") => {
    const [data, setData] = useState({ loading: true, payload: null })
    const refreshData = async (pth = "") => {
        const [res, ok, message] = await fetchData(pth)
        if (!ok) {
            alert(message)
            return
        }
        setData({ loading: false, payload: res.data })
    }
    useEffect(() => {
        refreshData(path)
    }, [path])
    const { payload, loading } = data
    return [payload, loading, () => { setData({ loading: true, payload: null }); refreshData(path) }]
}
