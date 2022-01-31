import React from 'react'

export const Loading = ({ loading = true }) => {
    return (
        loading &&
        <div className='d-flex justify-content-center mt-5'>
            <p className='h5 me-5'>Cargagando...</p>
            <div class="spinner-border" role="status">
                <span class="sr-only"></span>
            </div>
        </div>
    )
}
