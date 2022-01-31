import React, { useState } from 'react'
import 'react-calendar/dist/Calendar.css';

import { Menu } from '../../components/Menu'
import { cronogramas_menu } from '../../menus/cronogramas';
import { CronoView } from './cronograma/CronoView';
import { ListarCronogramasView } from './cronograma/ListarCronogramasView';
import { RegistrarCronogramaView } from './cronograma/RegistrarCronogramaView';

export const CronogramaPage = () => {
    const [view, setView] = useState("informe.registrar")
    const handlerItems = (menu) => {
        setView(menu)
    }
    return (
        <div className="d-flex flex-row">
            <Menu menus={cronogramas_menu} handlerItems={handlerItems} />
            <div className="container">
                {prepareView(view)}
            </div>
        </div>
    )
}
const prepareView = (view = "agenda.ver_agenda") => {
    switch (view) {
        case "agenda.ver_agenda": return <CronoView />
        case "agenda.registrar_cronograma": return <RegistrarCronogramaView />
        case "agenda.listar": return <ListarCronogramasView />
        default: return <CronoView />
    }
}