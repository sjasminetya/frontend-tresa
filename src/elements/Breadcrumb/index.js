import React from 'react'
import {Link} from 'react-router-dom'
import './index.scss'

export default function Breadcrumb({data}) {
    return (
        <nav aria-label="breadcrumb" style={{marginLeft: "1rem"}}>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                <li class="breadcrumb-item text-gray-900">{data.type} Details</li>
            </ol>
        </nav>
    )
}
