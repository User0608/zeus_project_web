import React, { useState } from 'react'

export const Menu = ({ menus = [], handlerItems = (name) => { } }) => {
    const [show, setShow] = useState({})
    const handlerToggler = (name) => {
        setShow({
            ...show,
            [name]: show[name] ? !show[name] : true
        })
        console.log(name)
    }
    return (
        <>
            {menus.map(menu => (
                <div className="menum" key={menu.name}>
                    <div onClick={() => handlerToggler(menu.name)}>
                        <span className={`menu-icon menu-icon-${show[menu.name] ? (show[menu.name] ? 'open' : 'close') : 'close'}`}></span>
                        <span className="menu-title no-seleccionable">{menu.title}</span>
                    </div>
                    {(show[menu.name]) &&
                        <ul className="list-none menu-items">
                            {
                                menu.items?.map(item => (
                                    <li
                                        key={`${menu.name}.${item.name}`}
                                        onClick={() => handlerItems(`${menu.name}.${item.name}`)}
                                        className="no-seleccionable"
                                    >{item.title}</li>
                                ))
                            }
                        </ul>
                    }
                </div>
            ))}
        </>
    )
}
