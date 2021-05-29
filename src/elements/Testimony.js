import React from 'react'
import Star from 'elements/Star'
import ImgTestiFrame from 'assets/images/images/ImgTestiframe.jpg'
import Button from './Button'

export default function Testimony({data}) {
    return (
        <section className="container" style={{paddingLeft: "2rem"}}>
            <div className="row align-items-center">
                <div className="col-auto" style={{marginRight: 70}}>
                    <div className="testimonial-hero" style={{margin: "30px 0 0 30px"}}>
                        <img src={data.imageUrl} alt={data.name} className="position-absolute" style={{zIndex: 1}} />
                        <img src={ImgTestiFrame} alt="Testimonial frame" className="position-absolute" style={{margin: "-30px 0 0 -30px"}} />
                    </div>
                </div>
                <div className="col">
                    <h4 style={{marginBottom: "40px"}}>{data.name}</h4>
                    <Star value={data.rate} width={35} height={35} spacing={4}></Star>
                    <h5 className="h2 font-weight-light line-height-2 my-3">
                        {data.content}
                    </h5>
                    <span className="text-gray-500">{data.familyName}, {data.familyOccupation}</span>
                    <Button className="btn px-5" style={{marginTop: 60}} hasShadow isPrimary type="link" href={`/testi/${data._id}`}>
                        Read Their Story
                    </Button>
                </div>
            </div>
        </section>
    )
}
