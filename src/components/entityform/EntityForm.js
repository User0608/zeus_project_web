import React from 'react'
import useFetchData from '../../hooks/useFetchData'
import { FormInput } from '../formularios/FormInput'
import { FromComboBox } from '../formularios/FromComboBox'

export const EntityForm = ({ onChange = () => { }, values = {} }) => {
    const [database] = useFetchData("/persona/info")
    return (
        <>
            <div className="row">
                <FormInput
                    onChange={onChange}
                    title="DNI"
                    name="dni"
                    value={values?.dni}
                    className="col-lg-3 col-sm-12"
                />
            </div>
            <hr className="bg-success" />
            <FormInput onChange={onChange} title="Nombres" name="nombre" value={values?.nombre} />
            <FormInput onChange={onChange} title="Apellido Paterno" name="ap_paterno" value={values?.ap_paterno} />
            <FormInput onChange={onChange} title="Apellido Materno" name="ap_materno" value={values?.ap_materno} />
            <FormInput onChange={onChange} title="Direccion" name="direccion" value={values?.direccion} />
            <FormInput onChange={onChange} title="Telefono" name="tel" value={values?.tel} />
            <FormInput onChange={onChange} title="Correo electrónico" name="email" value={values?.email} />
            <FormInput onChange={onChange} title="Fecha de Nacimiento" name="fecha_nacimiento" type="date" value={values?.fecha_nacimiento} />
            <div className="row">
                <FromComboBox
                    value={values?.nivel_estudio}
                    className="col-lg-6 col-sm-12"
                    options={database?.niveles_estudio}
                    onChange={onChange}
                    title="Nivel de estudios"
                    name="nivel_estudio" valueOption="nivel"
                />
                <FromComboBox
                    value={values?.estado_civil}
                    className="col-lg-6 col-sm-12"
                    options={database?.estados_civiles}
                    onChange={onChange}
                    title="Estado civil"
                    name="estado_civil" valueOption="estado"
                />
            </div>
            <hr className="bg-danger" />
        </>
    )
}

