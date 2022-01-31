import React from 'react'
import { CardSevice } from '../components/CardSevice'
import { system_modules } from '../modules'

export const HomePage = () => {
    return (
        <div className="container">
            <div className="mt-5 row">
                <CardSevice modules={system_modules} />
            </div>
        </div>
    )
}
