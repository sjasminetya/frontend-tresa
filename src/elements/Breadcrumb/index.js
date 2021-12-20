import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

export default function Breadcrumb({ data }) {
  return (
    <nav aria-label="breadcrumb" style={{ marginLeft: "1rem" }}>
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
        <li className="breadcrumb-item text-gray-900">{data.title} Details</li>
      </ol>
    </nav>
  )
}
