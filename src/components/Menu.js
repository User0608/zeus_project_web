import React, { useEffect, useState } from 'react'
import { ARROW_CLOSE, ARROW_OPEN } from '../assets'
import { nameFormat } from '../utils/utils'

export const Menu = ({ menus = [], handlerItems = () => { }, title = "Operaciones" }) => {
    const [show, setShow] = useState({})
    const [showMenu, setShowMenu] = useState(false)
    useEffect(() => {
        if (window.outerWidth < 700) {
            setShowMenu(true)
        }
    }, [])
    const handlerToggler = (name) => {
        setShow({
            ...show,
            [name]: show[name] ? !show[name] : true
        })
    }
    return (
        <>
            {showMenu ?
                <div className='position-absolute'>
                    <img src={ARROW_OPEN} alt="." onClick={() => { setShowMenu(false) }} />
                </div>
                :
                <div className='bg-light vh-100 shadow rounded'>
                    <div className='row'>
                        <div className="col-10">
                            <p className="h5 text-center p-2 no-seleccionable">{title}</p>
                        </div>
                        <div className='col-1'>
                            <img src={ARROW_CLOSE} alt="." onClick={() => { setShowMenu(true) }} />
                        </div>
                    </div>
                    {menus.map(menu => {
                        let nnn = nameFormat(menu.title)
                        return (
                            <div className="menum" key={nnn}>
                                <div onClick={() => handlerToggler(nnn)}>
                                    <span className={`menu-icon menu-icon-${show[nnn] ? (show[nnn] ? 'close' : 'open') : 'open'}`}></span>
                                    <span className="menu-title no-seleccionable">{menu.title}</span>
                                </div>
                                {(!show[nnn]) &&
                                    <ul className="list-none menu-items">
                                        {
                                            menu.items?.map(item => (
                                                <li
                                                    key={`${nnn}.${nameFormat(item)}`}
                                                    onClick={() => handlerItems(`${nnn}.${nameFormat(item)}`)}
                                                    className="no-seleccionable"
                                                >{item}</li>
                                            ))
                                        }
                                    </ul>
                                }
                            </div>
                        )
                    })}
                </div>
            }
        </>
    )
}