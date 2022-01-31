//export const API_URL = 'http://192.16.0.10:90'
export const API_URL = 'http://127.0.0.1:90'

export const formalizeURL = (path = "") => {
    path = path.trim()
    if (path.length > 0) {
        if (path[0] === "/") path = path.substring(1, path.length)
    }
    return `${API_URL}/${path}`
}

export const formalizeParams = (param = "") => {
    param = param.trim()
    if(param.length>0){
        if (param[0]==="?") param=param.substring(1,param.length)
    }
    return param
}