import React from 'react'
import { FormButtons } from '../../../components/formularios/FormButtons'
import { FormInput, FormText } from '../../../components/formularios/FormInput'

export const RegistroCicloView = () => {
    const handlerForm = (e) => {
        e.preventDefault()
    }
    return (
        <div className='container'>
            <p className="h5 ms-3 mt-4 mb-4">Registrar Ciclo</p>
            <form onSubmit={handlerForm}>
                <FormInput name='nombre' title='Nombre' />
                <FormInput name='fecha' title='Fecha de Inicio' type='date' />
                <FormText name='detalles' title='Detalles' />
                <FormButtons />
            </form>
        </div>
    )
}
