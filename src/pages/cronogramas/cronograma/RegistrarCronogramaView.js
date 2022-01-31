import React from 'react';
import { FormButtons } from '../../../components/formularios/FormButtons';
import { FormInput, FormText } from '../../../components/formularios/FormInput';
import { KTable } from '../../../components/KTable';
import useFetchData from '../../../hooks/useFetchData';
import useForm from '../../../hooks/useForm';
import { fetchDelete } from '../../../services/fetchDelete';
import { fetchPostData } from '../../../services/fetchPostData';

export const RegistrarCronogramaView = () => {
    const [data,refresh] = useFetchData("/cronograma/only")
    const [crono, changeitem, cleanform] = useForm({ nombre: "", descripcion: "" })
    const table = data?.map(it => ({
        Key: it.id,
        Nombre: it.nombre,
        Descripcion: it.descripcion,
        "Creado Por": "Primer Jefe"
    }))
    const handlerDelete = async (btnname, itemKey) => {
        if (btnname === "eliminar") {
            if (window.confirm("Eliminar registro")) {
                const [res, ok, message] = await fetchDelete(`/cronograma/${itemKey}`)
                if (!ok) {
                    alert(message + ", ", "probablemente, sea una dependencia de otros registros")
                    return
                }           
                refresh()
            }
            return
        }

    }
    const onhandlerSubmit = async (e) => {
        e.preventDefault()
        const [res, ok, message] = await fetchPostData("/cronograma", crono)
        if (!ok) {
            alert(message)
            return
        }
        cleanform()
        refresh()
    }
    return (
        <div>
            <form className="form" onSubmit={onhandlerSubmit}>
                <p className="h5 ms-3 mt-4 mb-4">Registro de Cronogramas</p>
                <FormInput title='Nombre'
                    onChange={changeitem}
                    value={crono.nombre}
                    name='nombre'
                />
                <FormText
                    onChange={changeitem}
                    name='descripcion'
                    value={crono.descripcion}
                    title='Detalles' rows={2}
                />
                <FormButtons />
            </form>
            <hr />
            <div className='container d-flex justify-content-end'>
                <button
                    onClick={refresh}
                    className='btn btn-sm btn-warning me-5 mb-2'>
                    Refresh
                </button>
            </div>
            <div className='container'>
                <KTable data={table} nameKey='Key' buttons={["eliminar"]} onClickButton={handlerDelete} />
            </div>
        </div>
    )
};
