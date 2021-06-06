import Breadcrumb from 'elements/Breadcrumb'
import React from 'react'
import details from 'json/itemDetails.json'

export default function Title({data}) {
    return (
        <section className="container" style={{marginTop: 70}}>
            <div className="row">
                <div className="col">
                    <Breadcrumb data={details} />
                </div>
                <div className="col-auto d-flex flex-column align-items-center">
                    <h1 className="text-gray-900">{data.name}</h1>
                    <span className="text-gray-400">{data.city},{data.country}</span>
                </div>
                <div className="col"></div>
            </div>
        </section>
    )
}
