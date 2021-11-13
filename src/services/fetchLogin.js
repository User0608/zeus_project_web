import { formalizeURL } from "./api_url"
import { managerError, managerResponse } from "./managers"

export const fetchLogin = async (path = "", data = {}) => {
    try {
        const response = await fetch(formalizeURL(path), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        return managerResponse(response)
    } catch (err) {
        return managerError(err)
    }
}
