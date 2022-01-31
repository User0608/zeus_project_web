import React from 'react'
import { KTable } from '../../../components/KTable'
import useFetchData from '../../../hooks/useFetchData'


export const ListarInformesView = () => {
    const [data, refresh] = useFetchData("/documento/informe")
    const tabledate = data?.map(d => ({
        ...d,
        path: `http://localhost:90/documento/informe/pdfs/${d.path}`
    }))
    return (
        <div className='container'>
            <div className="d-flex justify-content-end me-5 mt-2">
                <button
                    onClick={() => { refresh() }}
                    className="btn btn-sm btn-success"
                >Actualizar</button>
            </div>
            <p className="h5 ms-3 mb-4">Ciclos</p>
            <KTable
                nameKey='nombre'
                data={tabledate}
            />

        </div>
    )
}
