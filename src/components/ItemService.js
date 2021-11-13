import React from 'react'
import { Link } from 'react-router-dom'
export const ItemService = ({ title = "Service", icon = "logo.png", path = "/" }) => {
    return (
        <div class="card mb-3 mycard btn btn-sm">
            <Link to={path} className="mylink">
                <img src={icon} width="40" height="40" alt="icon" />
                <p>{title}</p>
            </Link>
        </div>
    )
}
