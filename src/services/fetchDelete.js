import { formalizeParams, formalizeURL } from "./api_url"
import { managerError, managerResponse } from "./managers"
export const fetchDelete = async (path = "", params = "") => {    
    try {
        const response = await fetch(`${formalizeURL(path)}?${formalizeParams(params)}`, {
            method: 'Delete',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': (JSON.parse(localStorage.getItem('session')) || { token: "" }).token
            },
        })
        return managerResponse(response)
    } catch (err) {
        return managerError(err)
    }
}
