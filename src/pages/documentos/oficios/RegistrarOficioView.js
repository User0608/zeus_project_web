import React from 'react'
import { FormInput, FormText } from '../../../components/formularios/FormInput'
import { FormButtons } from '../../../components/formularios/FormButtons'
import { fetchPostData } from '../../../services/fetchPostData'
import useForm from '../../../hooks/useForm'
const RegistrarOficioView = () => {
    const [men, change, reset] = useForm({
        codigo: "",
        dirigido_al: "",
        asunto: "",
        contenido: "",
        created_by: "74562459",
    })
    const postdata = async (e) => {
        e.preventDefault()
        const data = { ...men, codigo: men.codigo.trim() }
        const [res, ok, message] = await fetchPostData("/documento/oficio", data)
        if (!ok) {
            alert(message)
            return
        }
        alert("Documento generado")
        reset()
    }
    return (
        <div className="container mb-4">
            <div>
                <p className="h5 ms-3 mt-4 mb-4">Generar Oficio</p>
                <form className="form me-5" onSubmit={postdata}>
                    <FormInput title="Codigo Oficio"
                        name='codigo'
                        value={men.codigo}
                        onChange={change}
                    />
                    <FormInput
                        title="Se dirige al:"
                        name='dirigido_al'
                        value={men.dirigido_al}
                        onChange={change}
                    />
                    <FormText
                        title="Asunto" rows={2}
                        name='asunto'
                        value={men.asunto}
                        onChange={change}
                    />
                    <FormText
                        title="Cuerpo"
                        rows={5}
                        name='contenido'
                        value={men.contenido}
                        onChange={change}
                    />
                    <FormButtons oktitle="Generar Documento" />
                </form>
            </div>
        </div>
    )
}

export default RegistrarOficioView
