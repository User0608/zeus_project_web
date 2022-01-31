import React from 'react'
import { FormButtons } from '../../../components/formularios/FormButtons'
import { FormInput, FormText } from '../../../components/formularios/FormInput'
import useForm from '../../../hooks/useForm'
import { fetchPostData } from '../../../services/fetchPostData'

export const CrearConvocatoriaView = () => {
    const [convocatoria, handlerChange, reset] = useForm(
        { nombre: "", fecha: "", descripcion: "" }
    )
    const handlerPost = async (e) => {
        e.preventDefault()
        const post = {
            nombre: convocatoria.nombre,
            descripcion: convocatoria.descripcion,
            fecha: `${convocatoria.fecha}T15:04:05Z`,
            created_por: localStorage.getItem("username")
        }
        const [, ok, message] = await fetchPostData("/convocatoria", post)
        if (!ok) {
            alert(message)
            return
        }
        reset() 
        alert('datos guardados')       
    }
    return (
        <div>
            <form onSubmit={handlerPost}>
                <p className="h5 ms-3 mt-4 mb-4">Registrar Convocatoria</p>
                <div>
                    <FormInput
                        onChange={handlerChange}
                        value={convocatoria.nombre}
                        name='nombre' title='Nombre' />
                    <FormInput
                        onChange={handlerChange}
                        value={convocatoria.fecha}
                        name='fecha' title='Fecha' type='date' />
                    <FormText
                        onChange={handlerChange}
                        value={convocatoria.descripcion}
                        name='descripcion' title='Descripcion' />
                    <FormButtons resetHandler={reset} />
                </div>
            </form>
        </div>
    )
}
