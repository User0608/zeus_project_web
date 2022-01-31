import React from 'react'

export const EntityTable = ({ data = [] }) => {    
    return (
        <table className="mytable  table-hover table-bordered table_scroll" >
            <thead>
                <tr>
                    <th >Nombre</th>
                    <th >Apellidos</th>
                    <th >DNI</th>
                    <th >Direccion</th>
                    <th >Telefono</th>
                    <th >Email</th>
                    <th >Fecha Nacimiento</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.map(d => (
                        <tr key={d.dni}>
                            <td>{d.nombre}</td>
                            <td>{`${d.ap_paterno} ${d.ap_materno}`}</td>
                            <td>{d.dni}</td>
                            <td>{d.direccion}</td>
                            <td>{d.tel}</td>
                            <td>{d.email}</td>
                            <td>{d.fecha_nacimiento?.substring(0,10)}</td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
    )
}
