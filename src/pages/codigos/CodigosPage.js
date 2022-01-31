import React from 'react'
import useFetchData from '../../hooks/useFetchData'
export const CodigosPage = () => {
    const [grupos,] = useFetchData("/estaticos/codigos")
    return (
        <div className='container'>
            <div className="row">
                <p className='h3 text-center mt-2 mb-3'>Codigos internos</p>
            </div>
            <div className="row">
                <div className='col-lg-4 col-sm-12 p-2'>
                    {
                        grupos?.map(({ id, title, codigos }, index) => {
                            if (index < 1) {
                                return (<div className='card mb-2 ' key={id}>
                                    <p className={`card-header`}>{`${title}`}</p>
                                    <div className='card-body'>
                                        <ul>
                                            {
                                                codigos?.map(({ codigo, detalle }) => (
                                                    <li key={codigo}>{`${codigo} ${detalle}`}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>)
                            }
                            return <></>
                        })
                    }
                </div>
                <div className='col-lg-4 col-sm-12 p-2'>
                    {
                        grupos?.map(({ id, title, codigos }, index) => {
                            if (index >= 1 && index < 4) {
                                return (<div className='card mb-2' key={id}>
                                    <p className={`card-header`}>{`${title}`}</p>
                                    <div className='card-body'>
                                        <ul>
                                            {
                                                codigos?.map(({ codigo, detalle }) => (
                                                    <li key={codigo}>{`${codigo} ${detalle}`}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>)
                            }
                            return <></>
                        })
                    }
                </div>
                <div className='col-lg-4 col-sm-12 p-2'>
                    {
                        grupos?.map(({ id, title, codigos }, index) => {
                            if (index >= 4 && index < 100) {
                                return (<div className='card mb-2' key={id}>
                                    <p className={`card-header`}>{`${title}`}</p>
                                    <div className='card-body'>
                                        <ul>
                                            {
                                                codigos?.map(({ codigo, detalle }) => (
                                                    <li key={codigo}>{`${codigo} ${detalle}`}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>)
                            }
                            return <></>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
