import { useEffect } from 'react'

export const useLocal = (name, data) => {
    useEffect(() => {
        localStorage.setItem(name, JSON.stringify(data))
    }, [data, name])
}
