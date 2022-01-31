import React from 'react'
import { useState } from 'react'
import { Menu } from '../../components/Menu'
import { educacion_menu } from '../../menus/educacion'
import { ConvocatoriasView } from './convocatoria/ConvocatoriasView'
import { CrearConvocatoriaView } from './convocatoria/CrearConvocatoriaView'
import { RegistroAspiranteView } from './convocatoria/RegistroAspiranteView'
import { ListarCiclosView } from './cursos/ListarCiclosView'
import { ListarModuloEsbasView } from './cursos/ListarModuloEsbasView'
import { RegistroCicloView } from './cursos/RegistroCicloView'
import { RegistroModuloEvasView } from './cursos/RegistroModuloEsbasView'
import { EducacionView } from './EducacionView'
import { RegistrarCursoView } from './RegistrarCursoView'

export const EducacionHomePage = () => {
    const [view, setView] = useState("usuario.listar")
    const handlerItems = (menu) => {
        setView(menu)
    }
    return (
        <div className="d-flex flex-row">
            <Menu menus={educacion_menu} handlerItems={handlerItems} />
            <div className="container">
                {prepareView(view)}
            </div>
        </div>
    )
}
const prepareView = (view = "convocatoria.listar") => {
    switch (view) {
        case "convocatoria.convocatoria": return <ConvocatoriasView />
        case "convocatoria.listar": return <EducacionView />
        case "convocatoria.crear_convocatoria": return <CrearConvocatoriaView />
        case "convocatoria.registrar_aspirantes": return <RegistroAspiranteView />
        case "cursos.registrar_modulo_esbas": return <RegistroModuloEvasView />
        case "cursos.registrar_ciclo": return <RegistroCicloView />
        case "cursos.mostrar_ciclos": return <ListarCiclosView />
        case "cursos.modulos_esbas": return <ListarModuloEsbasView />
        case "cursos.registrar_cursos": return <RegistrarCursoView />

        default: return <EducacionView />
    }
}