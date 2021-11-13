import { useContext, useState } from "react"
import { SessionContext } from "../contexts/context";
import useForm from "../hooks/useForm";
import { sessionActions } from "../reducers/sessionReducer";
import { fetchLogin } from "../services/fetchLogin";

export const LogginView = () => {
    const { dispatchSession } = useContext(SessionContext)
    const [formValues, handlerInputChange, resetHandler] = useForm({ username: "", password: "" })
    const { username, password } = formValues
    const initSession = async (e) => {
        e.preventDefault()
        let [res, ok, message] = await fetchLogin('login', formValues)
        if (ok) {
            dispatchSession({
                type: sessionActions.iniciar_session,
                payload: res.token
            })
        } else {
            alert(message)
        }
        resetHandler()
    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <div className="card pt-5 ps-5 pe-5 pb-2 border border-1">
                    <div className="card-header bg-white">
                        <h1 className="text-center">Bienvenido</h1>
                    </div>
                    <form className="card-body" onSubmit={initSession}>
                        <div className="mb-2">
                            <label className="form-label text-muted">Username</label>
                            <input
                                value={username}
                                name="username"
                                onChange={handlerInputChange}
                                autoComplete="off"
                                type="text"
                                className="form-control form-control-sm"
                                placeholder="usuario del sistema"
                            />
                        </div>
                        <div className="mb-5">
                            <label className="form-label text-muted">Password</label>
                            <input
                                value={password}
                                name="password"
                                onChange={handlerInputChange}
                                type="password"
                                className="form-control form-control-sm"
                                placeholder="usuario del sistema"
                            />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button
                                type="submit"
                                className="btn  btn-primary"
                            >Iniciar session</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}