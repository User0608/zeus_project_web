import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { FormButtons2 } from '../../../components/formularios/FormButtons';
import { FormInput, FormText } from '../../../components/formularios/FormInput';
import { KTable } from '../../../components/KTable';
import useFetchData from '../../../hooks/useFetchData';
import useForm from '../../../hooks/useForm';
import { fetchDelete } from '../../../services/fetchDelete';
import { fetchPostData } from '../../../services/fetchPostData';

export const ListarCronogramasView = () => {
    const [data, refresh] = useFetchData("/cronograma/only")
    const [selectCronoID, setSelectCrono] = useState(-1)
    const table = data?.map(it => ({
        Key: it.id,
        Nombre: it.nombre,
        Descripcion: it.descripcion,
        "Creado Por": "Primer Jefe"
    }))
    const closeDetalles = () => {
        setSelectCrono(-1)
    }
    const handlerButtons = async (btnname, itemKey) => {
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
        setSelectCrono(itemKey)
    }
    return (
        <div className='container mt-2'>
            <div className='container d-flex justify-content-end'>
                <button onClick={refresh} className='btn btn-sm btn-warning me-5 mb-2'> Refresh </button>
            </div>
            <p className="h5 ms-3 mb-4">Cronogramas</p>
            <div className='container'>
                <KTable
                    celllenmax={60}
                    selected={selectCronoID}
                    data={table} nameKey='Key'
                    buttons={["eliminar", "Ver"]}
                    onClickButton={handlerButtons} />
            </div>

            <div>
                {
                    selectCronoID !== -1 &&
                    <ProgramacionAndActivities
                        crono_id={selectCronoID}
                        handlerClose={closeDetalles}
                    />
                }
            </div>
        </div>
    )
};


const ProgramacionAndActivities = ({ crono_id = 0, handlerClose = () => { } }) => {
    const [programs, refresh] = useFetchData(`/cronograma/programacion/${crono_id}`)
    const [selectProgram, setSelectProgram] = useState(-1)
    const [showNew, setShowNew] = useState(false)
    const [program, changeValue, resetForm] = useForm({
        nombre: "",
        detalle: "",
        fecha: "",
        cronograma_id: crono_id
    })
    const tabledata = programs?.map(p => ({
        ID: p.id,
        Nombre: p.nombre,
        Descripcion: p.detalle,
        Fecha: p?.fecha.substring(0, 10)
    }))
    useEffect(() => {
        setSelectProgram(-1)
    }, [crono_id])
    const closeDetalles = () => {
        setSelectProgram(-1)
    }
    const handlerButtons = async (btnname, itemKey) => {
        if (btnname == "eliminar") {
            if (window.confirm("eliminar registro?")) {
                const [res, ok, message] = await fetchDelete(`/programacion/${itemKey}`)
                if (!ok) {
                    alert(message)
                }
                refresh()
            }
            return
        }
        setSelectProgram(itemKey)
    }
    const handlerProgramacionForm = async (e) => {
        e.preventDefault()
        const data = { ...program, fecha: `${program.fecha}T15:04:05Z` }
        const [res, ok, message] = await fetchPostData(`/cronograma/programacion/${crono_id}`, data)
        if (!ok) {
            alert(message)
            return
        }
        resetForm()
        refresh()
    }
    return (
        <div className='container mb-2'>
            <hr />
            <hr />
            <div className='d-flex justify-content-end'>
                <button
                    className='btn btn-sm btn-outline-danger'
                    onClick={() => { handlerClose(); setSelectProgram(-1) }}>
                    Cerrar vistar de programación
                </button>
            </div>
            <p className="h5 mb-4 text-center">Programacion Dias</p>
            {!showNew ?
                <div>
                    <button
                        onClick={() => { setShowNew(true) }}
                        className='btn btn-sm btn-success'
                    >Agregar nuevo item</button>
                </div>
                :
                <div className='card mb-2 pt-2 me-3 ps-2'>
                    <div className='d-flex justify-content-end mt-0'>
                        <button
                            onClick={() => { setShowNew(false) }}
                            className='btn btn-sm btn-outline-dark me-1'
                        >X</button>
                    </div>
                    <form className='form me-5' onSubmit={handlerProgramacionForm}>
                        <div className='row row-cols-3 mb-0'>
                            <FormInput
                                name='nombre'
                                value={program.nombre}
                                onChange={changeValue}
                                title='Nombre Programacion'
                            />
                            <FormText
                                name='detalle'
                                value={program.detalle}
                                onChange={changeValue}
                                title='Descripcion' rows={1}
                            />
                            <FormInput
                                name='fecha'
                                value={program.fecha}
                                onChange={changeValue}
                                title='Nombre Programacion' type='date'
                            />
                        </div>
                        <div className='d-flex justify-content-end mb-3'>
                            <FormButtons2 />
                        </div>
                    </form>

                </div>
            }
            <div className='container d-flex justify-content-end'>
                <button onClick={refresh}
                    className='btn btn-sm btn-outline-dark me-3 mb-2'> Refresh </button>
            </div>
            <div className="row">
                <KTable data={tabledata}
                    nameKey='ID'
                    selected={selectProgram}
                    buttons={["eliminar", "Ver"]}
                    onClickButton={handlerButtons}
                    celllenmax={50}
                />
            </div>
            <div>
                {selectProgram !== -1 &&
                    <Actividades prograid={selectProgram} handlerClose={closeDetalles} />
                }
            </div>
        </div>
    )
};



const Actividades = ({ prograid = 0, handlerClose = () => { } }) => {
    const [actividades, refresh] = useFetchData(`/cronograma/actividad/${prograid}`)
    const [showNew, setShowNew] = useState(false)
    const [actividad, changeValue, resetForm] = useForm({
        titulo: "",
        detalle: "",
        hora_inicio: 0,
        hora_fin: 0,
        owner_dni: "74562459"
    })
    const tabledate = actividades?.map(a => ({
        ID: a.id,
        Titulo: a.titulo,
        Descripcion: a.detalle,
        "Hora Inicio": `${a.hora_inicio}:00`,
        "Hora Fin": `${a.hora_fin}:00`
    }))
    const handlerActividadForm = async (e) => {
        e.preventDefault()
        const data = {
            ...actividad,
            hora_inicio: parseInt(actividad.hora_inicio),
            hora_fin: parseInt(actividad.hora_fin),
        }
        if (actividad.hora_inicio < 0 || actividad.hora_inicio > 24 || actividad.hora_fin < 0 || actividad.hora_fin > 24) {
            alert("la hora tienes que estar en el rango de 0 a 24 horas")
            return
        }
        if (actividad.hora_fin < actividad.hora_inicio) {
            alert("Hora fin tiene que ser mayor que hora de inicio")
            return
        }
        const [res, ok, message] = await fetchPostData(`/cronograma/actividad/${prograid}`, data)
        if (!ok) {
            alert(message)
            return
        }
        refresh()
        resetForm()
    }
    const eliminarHandler = async (btnname, itemKey) => {
        if (btnname == "eliminar") {
            if (window.confirm("eliminar registro?")) {
                const [res, ok, message] = await fetchDelete(`/actividad/${itemKey}`)
                if (!ok) {
                    alert(message)
                }
                refresh()
            }
            return
        }
    }

    return (
        <div className='container mb-4'>
            <hr />
            <hr />
            {!showNew ?
                <div>
                    <button
                        onClick={() => { setShowNew(true) }}
                        className='btn btn-sm btn-success'
                    >Registrar nuevo Actividad</button>
                </div>
                :
                <div className='card mb-2 pt-2 me-3 ps-2'>
                    <div className='d-flex justify-content-end mt-0'>
                        <button
                            onClick={() => { setShowNew(false) }}
                            className='btn btn-sm btn-outline-dark me-1'
                        >X</button>
                    </div>
                    <form className='form me-5' onSubmit={handlerActividadForm}>
                        <div className='row row-cols-3 mb-0'>
                            <FormInput
                                name='titulo'
                                value={actividad.titulo}
                                onChange={changeValue}
                                title='Nombre Actividad'
                            />

                            <FormInput
                                name='hora_inicio'
                                value={actividad.hora_inicio}
                                onChange={changeValue}
                                title='Hora Inicio'
                                type='number'
                            />
                            <FormInput
                                name='hora_fin'
                                value={actividad.hora_fin}
                                onChange={changeValue}
                                title='Hora Fin'
                                type='number'
                            />
                        </div>
                        <FormText
                            name='detalle'
                            value={actividad.detalle}
                            onChange={changeValue}
                            title='Descripcion' rows={1}
                        />
                        <div className='d-flex justify-content-end mb-3'>
                            <FormButtons2 />
                        </div>
                    </form>

                </div>
            }
            <div className='d-flex justify-content-end'>
                <button className='btn btn-sm btn-outline-danger' onClick={handlerClose}>X</button>
            </div>
            <p className="h5 ms-3 mb-4 text-center">Actividades por Dia</p>
            <div className='row'>
                <KTable
                    nameKey='ID'
                    data={tabledate}
                    buttons={["eliminar"]}
                    onClickButton={eliminarHandler}
                />
            </div>
        </div>
    )
}

