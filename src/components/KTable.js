import React from 'react'

export const KTable = ({ data, nameKey = "id", buttons = [], onClickButton = () => { }, selected = "", celllenmax = 30 }) => {
    if (!data) {
        return <p>cargando!!</p>
    }
    if (data?.length === 0) {
        return (
            <> 
                <p>no hay registros</p>
            </>
        )
    }
    const keys = Object.keys(data[0])
    return (
        <table className="mytable  table-hover table-bordered table_scroll" >
            <thead>
                <tr>
                    {
                        keys.map(item => (
                            <th key={item}>{item.replaceAll("_", " ")}</th>
                        ))
                    }
                    {
                        buttons.map(btn => (<th key={btn}></th>))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data?.map(item => (
                        <tr key={item[nameKey]} className={selected === item[nameKey] ? "bg-dark text-white" : ""}>
                            {
                                keys.map(name => {
                                    let value = item[name]
                                    if (name === "path") {
                                        return <td><a href={value} target="_blank">PDF</a></td>
                                    }
                                    if (name === "fecha") {
                                        value = value.substring(0, 10)
                                    }
                                    if (value?.length > celllenmax) {
                                        value = value.substring(0, celllenmax) + " ..."
                                    }
                                    return <td key={name} >{value}</td>
                                })
                            }
                            {
                                buttons.map(btn => {
                                    var txt = btn
                                    if (btn === "Eliminar" || btn === "eliminar") {
                                        txt = ""
                                        return (
                                            <td>
                                                 <div className='d-flex justify-content-center'>
                                                    <button
                                                        onClick={() => onClickButton(btn, item[nameKey])}
                                                        className='btn btn-sm btn-outline-danger'>{txt}
                                                    </button>
                                                </div>
                                            </td>
                                        )
                                    }
                                    return (
                                        <td>
                                            <div className='d-flex justify-content-center m-0 p-0'>
                                                <button
                                                    onClick={() => onClickButton(btn, item[nameKey])}
                                                    className='btn btn-sm btn-secondary m-0 p-0 ps-1 pe-1'>{txt}
                                                </button>
                                            </div>
                                        </td>
                                    )
                                })
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
