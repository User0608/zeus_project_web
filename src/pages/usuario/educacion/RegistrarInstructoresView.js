import React, { useContext, useEffect, useState } from 'react'
import { EntityForm } from '../../../components/entityform/EntityForm'
import { FormButtons } from '../../../components/formularios/FormButtons'
import { FormText } from '../../../components/formularios/FormInput'
import { MessageModalContext } from '../../../contexts/context'
import useForm from '../../../hooks/useForm'
import { fetchData } from '../../../services/fetchData'
import { fetchPostData, fetchPutData } from '../../../services/fetchPostData'

export const RegistrarInstructoresView = () => {
    const [update, setUpdate] = useState(false)
    const { showMessage } = useContext(MessageModalContext)
    const [instructor, onChange, , setForm] = useForm({
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
        detalle: ""
    })
    const { dni } = instructor || { dni: "" }
    const loadIfExist = async (DNI = "") => {
        const [paylaod, ok, message, code] = await fetchData(`/persona/instructor/${DNI}`)
        if (!ok) {
            setUpdate(false)
            if (code !== 404) {
                alert(message)
            }
            return
        }
        setUpdate(true)
        setForm({ ...paylaod.data, fecha_nacimiento: paylaod.data.fecha_nacimiento.substring(0, 10) })
    }
    useEffect(() => {
        if (dni?.length === 8) {
            loadIfExist(dni)
        }
    }, [dni])

    const handlerSubmitData = async (e) => {
        e.preventDefault()
        let fetchf = fetchPostData
        if (update) fetchf = fetchPutData
        const [, ok, message] = await fetchf("/persona/instructor", {
            ...instructor,
            fecha_nacimiento: `${instructor.fecha_nacimiento}T15:04:05Z`,
            nivel_estudio: parseInt(instructor.nivel_estudio),
            estado_civil: parseInt(instructor.estado_civil)
        })

        if (!ok) {
            alert(message)
            return
        }
        showMessage("Datos guardados correctamente", "success")
        setForm(null)
    }
    return (
        <div className="container mb-4">
            <div className="d-flex justify-content-end mt-2 mb-4">
                <button
                    onClick={() => { setForm(null) }}
                    className="btn btn-sm btn-outline-dark"
                >Clear Form</button>
            </div>
            <p className="h5 ms-3 mt-4 mb-4">Registro de instructores</p>
            <form className="form" onSubmit={handlerSubmitData}>
                <EntityForm onChange={onChange} values={instructor} />
                <FormText
                    title='Detalles o comentarios'
                    name='detalle'
                    rows={4}
                    onChange={onChange}
                    value={instructor?.detalle}
                />
                <FormButtons resetHandler={() => { setForm(null) }} />
            </form>
        </div >
    )
}
