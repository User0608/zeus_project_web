import { ApiConnectError, OKMessageResponse } from "./message"

export const managerResponse = async (response) => {
    var status = false
    var res = null
    var message = "Algo paso"
    const statusCode = response.status
    res = await response.json()
    switch (statusCode) {
        case 200:
            message = OKMessageResponse
            status = true
            break
        default:
            message = res.message
            status = false
    }
    // TODO Logica
    return [res, status, message, statusCode]
}

export const managerError = async (err) => {
    let message = "Algo paso"
    if (err?.message === "Failed to fetch") {
        message = ApiConnectError
    }
    return [{}, false, message, 999]
}