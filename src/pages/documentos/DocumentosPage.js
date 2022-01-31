import React from 'react'
import { useState } from 'react'
import { Menu } from '../../components/Menu'
import { documentos_menu } from '../../menus/documentos'
import { ListarInformesView } from './informes/ListarInformesView'
import RegistrarInformeView from './informes/RegistrarInformeView'
import { ListarMemorandos } from './memorandos/ListarMemorandos'
import RegistrarMemorandoView from './memorandos/RegistrarMemorandoView'
import { ListartOficiosView } from './oficios/ListartOficiosView'
import RegistrarOficioView from './oficios/RegistrarOficioView'


export const DocumentosPage = () => {
    const [view, setView] = useState("informe.registrar")
    const handlerItems = (menu) => {
        setView(menu)
    }
    return (
        <div className="d-flex flex-row">
            <Menu menus={documentos_menu} handlerItems={handlerItems} />
            <div className="container">
                {prepareView(view)}
            </div>
        </div>
    )
}
const prepareView = (view = "informes.listar_informes") => {
    switch (view) {
        case "informes.listar_informes": return <ListarInformesView />
        case "informes.registrar": return <RegistrarInformeView />

        case "memorandos.listar_memorandos": return <ListarMemorandos />
        case "memorandos.registrar": return <RegistrarMemorandoView />        
        
        case "oficios.listar_oficios": return <ListartOficiosView />
        case "oficios.registrar": return <RegistrarOficioView />
        default: return <RegistrarInformeView />
    }
}