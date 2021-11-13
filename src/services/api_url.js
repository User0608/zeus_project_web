export const API_URL = 'http://localhost:90'

export const formalizeURL = (path = "") => {
    path = path.trim()
    if (path.length > 0) {
        if (path[0] === "/") path = path.substr(1, path.length)
    }
    return `${API_URL}/${path}`
}


