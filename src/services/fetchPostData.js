import { formalizeURL } from "./api_url"
import { managerError, managerResponse } from "./managers"

export const fetchPostData = async (path = "", data = {}) => {
    try {
        const response = await fetch(formalizeURL(path), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': (JSON.parse(localStorage.getItem('session')) || { token: "" }).token
            },
            body: JSON.stringify(data)
        })
        return managerResponse(response)
    } catch (err) {
        return managerError(err)
    }
}
 

export const fetchPutData = async (path = "", data = {}) => {
    try {
        const response = await fetch(formalizeURL(path), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': (JSON.parse(localStorage.getItem('session')) || { token: "" }).token
            },
            body: JSON.stringify(data)
        })
        return managerResponse(response)
    } catch (err) {
        return managerError(err)
    }
}

