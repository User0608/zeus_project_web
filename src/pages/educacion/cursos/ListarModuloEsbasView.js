import React from 'react'
import { KTable } from '../../../components/KTable'
import useFetchData from '../../../hooks/useFetchData'


export const ListarModuloEsbasView = () => {
    const [data, refresh] = useFetchData("/curso/esbas")
    return (
        <div className='container'>
            <div className="d-flex justify-content-end me-5 mt-2">
                <button
                    onClick={() => { refresh() }}
                    className="btn btn-sm btn-success"
                >Actualizar</button>
            </div>
            <p className="h5 ms-3 mb-4">Modulos Esbas</p>
            <KTable
                nameKey='nombre'
                data={data}
            />

        </div>
    )
}
