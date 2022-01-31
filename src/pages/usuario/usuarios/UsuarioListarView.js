import React, { useState } from 'react'
import { MenuActions } from '../../../components/MenuActions'
import { DetalleUsuario } from '../../../components/usuario/DetalleUsuario'
import useFetchData from '../../../hooks/useFetchData'
const NO_SELECTED = "no-selected-value"
export const UsuarioListarView = () => {
    const [checked, setChecked] = useState(NO_SELECTED)
    const [usuarios, refreshData] = useFetchData("/usuario")
    const [action, setAction] = useState(NO_SELECTED)
    const handlerAction = (option) => {
        setAction(option)
    }
    const handlerRefreshButton = () => {
        setAction(NO_SELECTED)
        refreshData()
    }
    const handlerUserSelectTableRow = (username) => {
        setChecked(username === checked ? NO_SELECTED : username)
        setAction(NO_SELECTED)
    }
    return (
        <div className="container">
            <MenuActions
                show={checked !== NO_SELECTED}
                actions={["Detalle", "Editar", "Eliminar"]}
                onClickOption={handlerAction}
                refreshData={handlerRefreshButton}

            />
            <p className="h5 ms-3 mb-4">Lista de usuarios del sistema</p>
            <div className='scrol_container col-lg-10 col-sm-12 border'>
                <table className="mytable  table-hover table-bordered">
                    <thead className='sticky-top bg-dark text-white '>
                        <tr>
                            <th></th>
                            <th >Nombre de usuario</th>
                            <th >Fecha de creación</th>
                            <th >Propietario</th>
                            <th >Estado actual</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usuarios === null ? <th className="load">Cargando datos ...</th> :
                                usuarios?.map(u => (
                                    <tr key={u.username}>
                                        <td><input
                                            type="checkbox"
                                            checked={checked === u.username}
                                            onChange={() => { }}
                                            onClick={() => handlerUserSelectTableRow(u.username)}
                                        /></td>
                                        <td>{u.username}</td>
                                        <td>{(new Date(u.created_at)).toLocaleString()}</td>
                                        <td className={u.owner ? "" : "cred"}>{u.owner || "NO DEFINIDO"}</td>
                                        <td>{u.state ? "Activo" : "No Activo"}</td>
                                    </tr>
                                ))
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <DetalleUsuario
                    superRefresh={handlerRefreshButton}
                    action={action} username={checked}
                />
            </div>
        </div>
    )
}
