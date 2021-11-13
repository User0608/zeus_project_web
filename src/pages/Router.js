import React from 'react'
import { Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { UsuarioPage } from './UsuarioPage';

export const Router = () => {
    return (
        <>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/usuarios">
                <UsuarioPage />
            </Route>
        </>
    )
}
