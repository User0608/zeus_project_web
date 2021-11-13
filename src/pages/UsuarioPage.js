import React from 'react'
import { Menu } from '../components/Menu'
import { usuario_menu } from '../menus/menus'

export const UsuarioPage = () => {
    const handlerItems = (menu) => {
        alert(menu)
    }
    return (
        <div className="d-flex flex-row">
            <div className="bg-light vh-100 shadow rounded">
                <p className="h5 text-center p-2 no-seleccionable">Operaciones</p>
                <Menu menus={usuario_menu} handlerItems={handlerItems} />
            </div>
            <div className="container">
                {prepareView()}
            </div>
        </div>
    )
}
const prepareView = () => {
    return (
        <p>hola como estan</p>
    )   
}