import React from 'react'
import { Route } from "react-router-dom";
import { CodigosPage } from './codigos/CodigosPage';
import { CronogramaPage } from './cronogramas/CronogramaPage';
import { DocumentosPage } from './documentos/DocumentosPage';
import { EducacionHomePage } from './educacion/EducacionHomePage';
import { HomePage } from "./HomePage";
import { ReportesPage } from './reportes/ReportesPage';
import { UsuarioHomePage } from './usuario/UsuarioHomePage';

export const Router = () => {
    return (
        <>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/usuarios">
                <UsuarioHomePage />
            </Route>
            <Route exact path="/educacion">
                <EducacionHomePage />
            </Route>
            <Route exact path="/informes">
                <DocumentosPage />
            </Route>
            <Route exact path="/codigos">
                <CodigosPage />
            </Route>
            <Route exact path="/reportes">
                <ReportesPage />
            </Route>
            <Route exact path="/cronogramas">
                <CronogramaPage />
            </Route>
        </>
    )
}
