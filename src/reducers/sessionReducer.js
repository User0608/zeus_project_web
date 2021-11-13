export const sessionActions = {
    iniciar_session: "login",
    cerrar_session: "exit"
}

export const sessionReducer = (state = { token: "" }, action = { type: "none", payload: "" }) => {
    switch (action.type) {
        case sessionActions.cerrar_session:
            return { token: action.payload }
        case sessionActions.iniciar_session:
            return { token: action.payload }
        default:
            return state
    }
}
