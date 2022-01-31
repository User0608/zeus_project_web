const NUMBERS = "1234567890"
export const ACTIONS = {
    numbre: "num",
    len: "len",
    max: "max",
    min: "min"
}
export const validator = (target = "", action = "") => {
    target = target.trim()
    let result = standardizeSpaces(action)
    for (let i = 0; i < result.length; i++) {
        let r = formatAction(result[i])
        let message = ""
        if (!r.ok) {
            return response(r.message)
        }
        switch (r.action) {
            case ACTIONS.numbre: message = numbers(target); break
            case ACTIONS.max: message = maxLen(target, r.param); break
            case ACTIONS.min: message = minLen(target, r.param); break
            case ACTIONS.len: message = flen(target, r.param); break
            default:
        }
        if (message !== "") {
            return response(message)
        }
    }
    return response("")
}
const response = (message = "") => {
    if (message === "") {
        return { ok: true, message }
    }
    return { ok: false, message }

}
const formatAction = (action = "") => {
    let retorno = { action, param: 0, ok: true, message: "" }
    if (action.includes("=")) {
        let sp = action.split("=")
        if (sp.length > 1 && sp.length <= 2) {
            let value = sp[0]
            let param = parseInt(sp[1])
            retorno.action = value
            retorno.param = param
            if (!param) {
                retorno.ok = false
                retorno.message = "Algo paso!"
                console.log("parametro invaido", "->", action)
            }
        } else {
            console.log("parametros invalidos:", action)
        }
    }
    return retorno
}
const standardizeSpaces = (action = "") => {
    let dato = action
    while (dato.includes('  ')) {
        dato = dato.replace('  ', ' ')
    }
    return dato.trim().split(' ')
}
const numbers = (target = "") => {
    let len = target.length
    let message = ""
    for (let i = 0; i < len; i++) {
        if (!NUMBERS.includes(target[i])) {
            message = "incorrecto, debe estar formado por números"
        }
    }
    return message
}
const flen = (target = "", param = 0) => {
    if (target.length !== param) {
        return `incorrecto, debe de tener una longitud de ${param}`
    }
    return ""
}
const maxLen = (target = "", param = 0) => {
    if (target.length > param) {
        return `incorrecto, debe de tener una longitud máxima de ${param}`
    }
    return ""
}
const minLen = (target = "", param = 0) => {
    if (target.length < param) {
        return `incorrecto, debe de tener una longitud mínima de ${param}`
    }
    return ""
}
