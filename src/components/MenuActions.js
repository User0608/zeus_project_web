import React from 'react'

export const MenuActions = ({ show = false, actions = [], onClickOption = () => { }, refreshData = () => { } }) => {
    return (
        <div className="d-flex justify-content-between mt-2 mb-4">
            {
               show &&
                <div className="d-flex align-items-center">
                    {
                        actions.map(a => {
                            let className = "btn btn-sm btn-warning me-3"
                            if (a === "Eliminar") {
                                className = "btn btn-sm btn-danger me-3"
                            }
                            if (a === "Detalle") {
                                className = "btn btn-sm btn-success me-3"
                            }
                            return (
                                <button
                                    onClick={() => { onClickOption(a) }}
                                    className={className}
                                >{a}</button>
                            )
                        })
                    }
                </div>
            }
            <button
                onClick={refreshData}
                className="btn btn-sm btn-outline-dark"
            >Actualizar</button>
        </div>


    )
}
