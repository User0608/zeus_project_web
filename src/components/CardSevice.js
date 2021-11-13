import React from 'react'
import { USUARIO_ICON } from '../assets'
import { ItemService } from './ItemService'

export const CardSevice = () => {
    return (
        <div class="card mb-3">
            <div class="card-header">Operaciones</div>
            <div class="card-body text-dark">
                <div className="row">
                    <ItemService title="Usuarios" icon={USUARIO_ICON} path="/usuarios"/>
                    <ItemService />
                    <ItemService />
                    <ItemService />
                    <ItemService />
                    <ItemService />
                    <ItemService />
                    <ItemService />
                </div>
            </div>
        </div>
    )
}
