import React, { useContext } from 'react'
import useForm from '../../../hooks/useForm'
import { validator } from '../../../utils/validator'
import { fetchPostData } from '../../../services/fetchPostData'
import { MessageModalContext } from '../../../contexts/context'
export const UsuarioRegistrarView = () => {
    const { showMessage } = useContext(MessageModalContext)
    const [data, handlerChange, resetHandler] = useForm({
        username: "",
        password: "",
        password2: ""
    })
    const submitData = (e) => {
        e.preventDefault()
        if (data.password !== data.password2) {
            alert(`las contraseñas no coinciden.`)
            resetHandler()
            return
        }
        let res = validator(data.username, "min=6")
        if (!res.ok) {
            alert(`username ${res.message}`)
            resetHandler()
            return
        }
        res = validator(data.password, "min=6")
        if (!res.ok) {
            alert(`password ${res.message}`)
            resetHandler()
            return
        }
        saveData()
    }
    const saveData = async () => {
        const [,ok, message] = await fetchPostData("/usuario", { username: data.username, password: data.password })
        if (!ok) {
            alert(message)
            return
        } else {
            showMessage("Datos guardados correctamente","success")
        }
        resetHandler()
    }

    return (
        <div className="container">
            <div>
                <p className="h5 ms-3 mt-4 mb-4">Registro de usuarios del sistema</p>
                <form className="form me-5" onSubmit={submitData}>
                    <div className="mb-2">
                        <label className="form-label">Nombre de usuario</label>
                        <input
                            onChange={handlerChange}
                            value={data.username}
                            autoComplete="off"
                            className="form-control form-control-sm"
                            type="text"
                            name="username"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="form-label">Password</label>
                        <input
                            onChange={handlerChange}
                            value={data.password}
                            className="form-control form-control-sm"
                            type="password"
                            name="password"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="form-label">Confirme password</label>
                        <input
                            onChange={handlerChange}
                            value={data.password2}
                            className="form-control form-control-sm"
                            type="password"
                            name="password2"
                        />
                    </div>
                    <div className="mt-4">
                        <input
                            onClick={resetHandler}
                            className="btn btn-sm btn-danger me-5"
                            type="reset"
                            value="cancelar"
                        />
                        <input
                            className="btn btn-sm btn-success me-3"
                            type="submit"
                            value="Guardar"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}
