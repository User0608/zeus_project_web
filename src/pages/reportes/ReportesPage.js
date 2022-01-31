import React from 'react'
import { useState } from 'react'
import { Menu } from '../../components/Menu'
import { reportes_menu } from '../../menus/reportes'
import { ReporteActividades } from './reportes/ReporteActividades'


export const ReportesPage = () => {
    const [view, setView] = useState("reportes.actividades")
    const handlerItems = (menu) => {
        setView(menu)
    }
    return (
        <div className="d-flex flex-row">
            <Menu menus={reportes_menu} handlerItems={handlerItems} />
            <div className="container">
                {prepareView(view)}
            </div>
        </div>
    )
}
const prepareView = (view = "reportes.actividades") => {
    switch (view) {
        case "reportes.actividades": return <ReporteActividades />
        default: return <ReporteActividades />
    }
}