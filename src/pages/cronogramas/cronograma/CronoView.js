import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import useFetchData from '../../../hooks/useFetchData';
import './styles.css'

export const CronoView = () => {
    const [data, refresh] = useFetchData('/cronograma')
    const programas = data?.map(item => item.programas).flat(2)
    const [detalles, setDetalles] = useState({})
    const hadlerDetalles = (date) => {
        let det = programas.filter(d => d?.fecha.split('T')[0] == date)
        if (det.length !== 0) {
            setDetalles({ 
                titulo: det[0]?.nombre,
                descripcion: det[0]?.detalle, 
                actividades: det[0]?.actividades
             })

            return
        }
        setDetalles({})
    }
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-8 col-sm-12'>
                    <h3 className='text-center mb-4'>Cronograma B-128</h3>
                    <Calendar
                        onClickDay={(date) => {
                            hadlerDetalles(date.toJSON().split('T')[0])
                        }}
                        className="calen"
                        locale='es-ES'
                        tileClassName={({ date }) => {
                            let f = 'off'
                            programas?.forEach(e => {
                                if (e?.fecha.split('T')[0] == date.toJSON().split('T')[0]) {

                                    f = 'ok'
                                }
                            });
                            if (f === 'ok') {
                                return 'select-time rounded-pill'
                            }
                        }}
                    />
                </div>
                <div className='col-lg-4 col-sm-12'>                 
                    {/* <h4 className='mb-1'>Detalles</h4> */}
                    {!detalles?.actividades&&
                     <p className="form-text fs-5 text-center mt-5">no hay actividades</p>
                    }
                    <p className="form-text fs-5 text-center mb-0">{detalles?.titulo}</p>
                    <p className="form-text fs-6">{detalles?.descripcion}</p>
                    {
                        detalles?.actividades?.map(item => (
                            <div className="card mb-2" key={item.id}>
                                <div className="card-body">
                                    <h6 className="card-title">{item?.titulo}</h6>
                                    <p className="form-text">{item?.detalle}</p>
                                    <div className='form-text'>
                                        <li>Hora inicio: {item?.hora_inicio}:00</li>
                                        <li>Hora Fin: {item?.hora_fin}:00</li>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
