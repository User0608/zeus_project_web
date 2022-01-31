import React from 'react';
import { useState } from 'react/cjs/react.development';
import { FormInput } from '../../../components/formularios/FormInput';
import { KTable } from '../../../components/KTable';
import useForm from '../../../hooks/useForm';
import { fetchData } from '../../../services/fetchData';

export const ReporteActividades = () => {
    const [interval, change] = useForm({
        fecha_inicio: (new Date()).toJSON().substring(0, 10),
        fecha_fin: (new Date()).toJSON().substring(0, 10),
    })
    const [datos, setDatos] = useState([])
    const tabledata = datos?.map(d => ({
        Actividad: d.titulo,
        "DNI Encargado": d.owner_dni,
        "Nombre Encargado": d.owner_nombre,
        "Hora Inicio": `${d.hora_inicio}:00`,
        "Hora Fin": `${d.hora_fin}:00`,
        Fecha: d.fecha?.substring(0, 10)
    }))
    const handlerConsult = async (e) => {
        e.preventDefault()
        const path = `/reporte/actividad?fecha_inicio=${interval.fecha_inicio}&fecha_fin=${interval.fecha_fin}`
        const [res, ok, message] = await fetchData(path)
        if (!ok) {
            alert(message)
            return
        }
        setDatos(res.data)
    }
    return (
        <div className='container m-2'>
            <div>
                <p className="h5 ms-3 mb-4">Actividades</p>
                <form onSubmit={handlerConsult}>
                    <div className='row row-cols-xl-3  row-cols-sm-2'>
                        <FormInput
                            name='fecha_inicio'
                            onChange={change}
                            value={interval.fecha_inicio}
                            type='date'
                            title='Fecha Inicial'
                        />
                        <FormInput
                            name='fecha_fin'
                            value={interval.fecha_fin}
                            onChange={change}
                            title='Fecha Final'
                            type='date'
                        />
                        <div className='d-flex justify-content-xl-center'>
                            <span className='d-flex flex-column justify-content-center mt-1'>
                                <button className='btn btn-sm btn-success'>
                                    Consultar
                                </button>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            <div>
                {tabledata && <>
                    {(tabledata.length > 0) &&
                        <div>
                            <p className=' text-center h4 mb-4 bt-5'>
                                Actividades realizadas del {interval.fecha_inicio} al {interval.fecha_fin}
                            </p>
                        </div>
                    }</>
                }
                <KTable data={tabledata} />
            </div>
        </div>
    );
};
