import React, { useContext, useState } from 'react'
import { EntityForm } from '../../../components/entityform/EntityForm'
import { FormButtons } from '../../../components/formularios/FormButtons'
import { MessageModalContext } from '../../../contexts/context'
import useForm from '../../../hooks/useForm'
import { useSetFetchData } from '../../../hooks/useSetFetchData'
import { fetchPostData } from '../../../services/fetchPostData'

export const RegistroSegundoJefeView = () => {
    const [edit, setEdit] = useState(false)
    const { showMessage } = useContext(MessageModalContext)
    const [comandante, onChange, resetHandler, setForm] = useForm({
        dni: "",
        nombre: "",
        ap_paterno: "",
        ap_materno: "",
        direccion: "",
        tel: "",
        email: "",
        fecha_nacimiento: "",
        nivel_estudio: "",
        estado_civil: "",
    })
    const adapterFecha = (data) => {
        setForm({ ...data, fecha_nacimiento: data.fecha_nacimiento.substring(0, 10) })
    }
    const [refresh] = useSetFetchData("/persona/segundojefe", adapterFecha)

    const handlerSubmitData = async (e) => {
        e.preventDefault()
        const [, ok, message] = await fetchPostData("/persona/segundojefe", {
            ...comandante,
            fecha_nacimiento: `${comandante.fecha_nacimiento}T15:04:05Z`,
            nivel_estudio: parseInt(comandante.nivel_estudio),
            estado_civil: parseInt(comandante.estado_civil)
        })
        if (!ok) {
            alert(message)
            return
        }
        showMessage("Datos guardados correctamente", "success")
        setEdit(false)    
    }
    return (
        <div className="container mb-4">
            <p className="h5 ms-3 mt-4 mb-4">Datos Segundo jefe</p>
            <div className="d-flex justify-content-end mt-2 me-5">
                {!edit &&
                    <button
                        onClick={() => { setEdit(true) }}
                        className="btn btn-sm btn-success">
                        Editar
                    </button>}
            </div>
            <form className="form" onSubmit={handlerSubmitData}>
                <fieldset {...(edit ? {} : { disabled: "disabled" })}>
                    <EntityForm onChange={onChange} values={comandante} />                    
                    <FormButtons resetHandler={() => { setEdit(false); resetHandler(); refresh() }} />
                </fieldset>
            </form>
        </div >
    )
}
