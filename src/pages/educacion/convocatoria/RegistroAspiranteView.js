import React from 'react'
import { EntityForm } from '../../../components/entityform/EntityForm'
import { FormButtons } from '../../../components/formularios/FormButtons'
import { FromComboBox } from '../../../components/formularios/FromComboBox'
import useFetchData from '../../../hooks/useFetchData'
import useForm from '../../../hooks/useForm'

export const RegistroAspiranteView = () => {
    const [convocatorias] = useFetchData('/convocatoria')
    const [datos, change, reset] = useForm({})
    const handlerForm = (e) => {
        e?.preventDefault()
    }
    return (
        <div>
            <form className="form" onSubmit={handlerForm}>
                <p className="h5 ms-3 mt-4 mb-4">Registro Aspirante</p>
                <FromComboBox
                    name='convocatoria'
                    keyOpetion='nombre'
                    valueOption='nombre'
                    title='Convocatoria'
                    options={convocatorias} />
                <EntityForm />
                <FormButtons />
            </form>
        </div>
    )
}
