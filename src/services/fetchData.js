import { formalizeURL } from "./api_url"
import { managerError, managerResponse } from "./managers"
 
export const fetchData = async (path = "") => {
    try {
        const response = await fetch(formalizeURL(path), {
            method: 'GET',
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
 