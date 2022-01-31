import React from 'react'
import { FormInput } from '../../components/formularios/FormInput'
import { FormButtons } from '../../components/formularios/FormButtons'

export const RegistrarCursoView = () => {
    return (
        <div className="container">
            <div>
                <p className="h5 ms-3 mt-4 mb-4">Registrar cursos</p>
                <form className="form me-5" onSubmit={() => { }}>
                    <FormInput title="Nombre" />
                    <FormInput title="Descripción" />
                    <FormButtons />
                </form>
            </div>
        </div>
    )
}
