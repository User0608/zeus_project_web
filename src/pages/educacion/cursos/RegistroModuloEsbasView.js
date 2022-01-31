import React from 'react'
import { FormButtons } from '../../../components/formularios/FormButtons'
import { FormInput, FormText } from '../../../components/formularios/FormInput'

export const RegistroModuloEvasView = () => {
    const handlerForm = (e) => {
        e.preventDefault()
    }
    return (
        <div className='container'>
            <p className="h5 ms-3 mt-4 mb-4">Registrar Convocatoria</p>
            <form onSubmit={handlerForm}>
                <FormInput name='nombre' title='Nombre' />
                <FormText title='Descripcion' name='descripcion' rows={2} />
                <FormInput name='numero_horas' title='Numero de Horas' />
                <FormInput name='numero_alumnos' title='Numero maximo alumnos' />
                <FormText title='Comentarios' title='comentarios' />
                <FormButtons />
            </form>

        </div>
    )
}
