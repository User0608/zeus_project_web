import React, { useContext } from 'react'
import { useState } from 'react/cjs/react.development'
import { fetchDelete } from '../../services/fetchDelete'
import { FormButtons } from '../formularios/FormButtons'
import { MessageModalContext } from '../../contexts/context'
import { Loading } from '../Loading'

export const DetalleUsuario = ({ username = "", action = "", superRefresh = () => { } }) => {
    const { showMessage } = useContext(MessageModalContext)
    const [deleteField, setDeleteField] = useState("no delete")
    const handlerDeleteUser = async (e) => {
        e.preventDefault()
        if (`Eliminar ${username}` !== deleteField.trim()) {
            alert('Inserte correctamente la cadena de confirmación de eliminación o cancele operación')
            return
        }
        const [res, ok, message] = await fetchDelete("usuario", `username=${username}`)
        if (!ok) {
            alert(message)
            return
        }
        showMessage(res.message, "success")
        superRefresh()
    }
    if (action === "Editar") {
        return (
            <div className='mt-5 mb-2'>
                <h2>Cambiar password</h2>
                <form className="form me-5">
                    <div className="mb-2">
                        <label className="form-label">Password</label>
                        <input
                            className="form-control form-control-sm"
                            type="password"
                            name="password"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="form-label">Confirme password</label>
                        <input
                            className="form-control form-control-sm"
                            type="password"
                            name="password2"
                        />
                    </div>
                    <FormButtons />
                </form>
            </div>
        )
    }
    if (action === "Detalle") {
        return (
            <div className='mt-5 mb-2'>
                <h1>hoa</h1>
            </div>
        )
    }
    if (action === "Eliminar") {
        return (
            <div className='mt-5 mb-2'>
                <form className='form' onSubmit={handlerDeleteUser}>
                    <p>
                        {"Digite: "}
                        <span class="text-muted">{`Eliminar ${username}`}</span>
                    </p>
                    <input
                        onChange={(e) => { setDeleteField(e.target.value) }}
                        className='form-control' type="text" />
                    <FormButtons
                        canceltitle='Cancelar'
                        oktitle='Confirmar'
                    />
                </form>
            </div>
        )
    }
    return <></>
}
