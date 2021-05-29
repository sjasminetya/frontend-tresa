import React from 'react'
import Button from './Button'

function Categories({ data }) {
    return data.map((item, index) => (
        <section className="container" style={{ paddingLeft: "2rem" }} key={`Category-${index + 1}`}>
            <h4 className="mb-3 font-weight-medium">
                {item.name}
            </h4>
            <div className="container-grid">
                {
                    item.items.length === 0 ? (
                        <div className="row">
                            <div className="col-auto align-items-center">
                                There is no destination at this category
                            </div>
                        </div>
                    ) : (
                        item.items.map((val, v) => (
                            <div className="item column-3 row-1" key={`Category-${index + 1}-Item${v + 1}`}>
                                <div className="card">
                                    {
                                        val.isPopular &&
                                        <div className="tag">
                                            Pupular <span className="font-weight-light">Choice</span>
                                        </div>
                                    }
                                    <figure className="img-wrapper" style={{height: 180}}>
                                        <img src={val.imageUrl} alt={val.name} className="img-cover" />
                                    </figure>
                                    <div className="meta-wrapper">
                                        <Button className="stretched-link d-block custom-color" type="link" href={`/properties/${val._id}`}>
                                            <h5>{val.name}</h5>
                                        </Button>
                                        <span className="text-gray-500">
                                            {val.city}, {val.country}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </section>
    ))

}

export default Categories