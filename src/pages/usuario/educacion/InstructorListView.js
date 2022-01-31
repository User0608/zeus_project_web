import React from 'react'
import { EntityTable } from '../../../components/EntityTable'
import useFetchData from '../../../hooks/useFetchData'

export const InstructorListView = () => {
    const [data, ] = useFetchData("/persona/instructor/all")
    return (
        <div className="container ">
            <div className="d-flex justify-content-end me-5 mt-2">
                <button
                    onClick={() => { }}
                    className="btn btn-sm btn-success"
                >Actualizar</button>
            </div>
            <p className="h5 ms-3 mb-4">Lista de instructores</p>
            <p className="h6 mb-2 load">Jefes de instruccion</p>
            <EntityTable data={data?.jefe_instrucion ? [data.jefe_instrucion] : []} />
            <p className="h6 mb-2 load mt-5">Instructores</p>
            <EntityTable data={data?.instructores} />
        </div>
    )
}
