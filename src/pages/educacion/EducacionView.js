import React from 'react'
import { FormInput } from '../../components/formularios/FormInput'
import { FormButtons } from '../../components/formularios/FormButtons'


export const EducacionView = () => {
    return (
        <div className="container ">
            <div>
                <p className="h5 ms-3 mt-4 mb-4">Registro de aspirantes a bomberos</p>
                <form className="form me-5" onSubmit={() => { }}>
                    <FormInput title="Nombre" />
                    <FormInput title="Apellido Materno" />
                    <FormInput title="Apellido Paterno" />
                    <FormInput title="DNI" />
                    <FormInput title="Edad" />
                    <FormInput title="Fecha Nacimiento" />
                    <FormInput title="Dirección" />
                    <FormInput title="Correo" />
                    <FormInput title="Telefono" />
                    <FormInput title="Estudios" />
                    <FormInput title="Observaciones" />
                    <FormButtons />
                </form>
            </div>
        </div>
    )
}
