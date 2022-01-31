import React from 'react'
import { ItemService } from './ItemService'

export const CardSevice = ({ modules = [] }) => {
    return (
        <div class="card mb-3">
            <div class="card-header">Operaciones</div>
            <div class="card-body text-dark">
                <div className="row">
                    {modules.map(({ title, icon, path }) => (
                        <ItemService title={title} icon={icon} path={path} />
                    ))}
                </div>
            </div>
        </div>
    )
}
