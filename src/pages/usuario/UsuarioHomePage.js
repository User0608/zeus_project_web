import React from 'react'
import { useState } from 'react'
import { Menu } from '../../components/Menu'
import { usuario_menu } from '../../menus/usuarios'

import { InstructorListView } from './educacion/InstructorListView'
import { InstructorJefeRegistrarView } from './educacion/InstructorJefeRegistrarView'
import { RegistroComandanteView } from './registros/RegistroComandanteView'
import { RegistroSegundoJefeView } from './registros/RegistroSegundoJefeView'
import { ResumenRegistrosView } from './registros/ResumenRegistrosView'
import { UsuarioListarView } from './usuarios/UsuarioListarView'
import { UsuarioRegistrarView } from './usuarios/UsuarioRegistrarView'
import { RegistrarInstructoresView } from './educacion/RegistrarInstructoresView'

export const UsuarioHomePage = () => {
    const [view, setView] = useState("usuario.listar")
    const handlerItems = (menu) => {
        setView(menu)
    }
    return (
        <div className="d-flex flex-row">
            <Menu menus={usuario_menu} handlerItems={handlerItems} />
            <div className="container">
                {prepareView(view)}
            </div>
        </div>
    )
}
const prepareView = (view = "usuarios.listar") => {
    switch (view) {
        case "usuarios.listar": return <UsuarioListarView />
        case "usuarios.registrar": return <UsuarioRegistrarView />
        case "educacion.listar_instructores": return <InstructorListView />
        case "educacion.registrar_instructor_jefe": return <InstructorJefeRegistrarView />
        case "educacion.registrar_instructores":return  <RegistrarInstructoresView/>
        case "registros.comandante_de_unidad": return <RegistroComandanteView />
        case "registros.segundo_jefe": return <RegistroSegundoJefeView />
        case "registros.resumen": return <ResumenRegistrosView />
        default: return <UsuarioListarView />
    }
}