import React from 'react'

export default function MostPicked(props) {
    return (
        <section className="container">
            <h4 className="mb-3" style={{ paddingLeft: "2rem" }}>Most Picked</h4>
            <div className="container-grid mb-5" style={{ marginLeft: "2rem" }}>
                {
                    props.data.map((item, index) => {
                        return (
                            <div className={`item column-4 ${index === 0 ? "row-2" : "row-1"}`}>
                                <div className="card">Card 1</div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
