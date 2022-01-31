import React from 'react'

export const FromComboBox = (
    {
        keyOpetion = "id",
        valueOption = "",
        options = [],
        name = "field",
        title = "title",
        className = "none",
        value = {},
        onChange = () => { }
    }) => {
    return (
        <div className={`mb-3 ${className}`}>
            <label className="form-label mb-0 ms-1">{title}</label>
            <select name={name} onChange={onChange} className="form-control form-control-sm" value={value}>
                <option value="none" className="text-center">Elija una opcion</option>
                {options?.map(o => (
                    <option value={o[keyOpetion]}>{o[valueOption]}</option>
                ))}
            </select>
        </div>
    )
}
