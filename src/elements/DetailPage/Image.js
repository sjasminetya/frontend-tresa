import React from 'react'
import Fade from "react-reveal/Fade"

export default function Image({ image }) {
  return (
    <section className="container">
      <div className="container-grid sm mt-4">
        {
          image.map((item, index) => (
            <div className={`item ${index > 0 ? "column-5" : "column-7"} ${index > 0 ? "row-1" : "row-2"}`}
              key={index + 1}>
              <Fade bottom delay={500 * index}>
                <div className="card card-featured">
                  <figure className="img-wrapper">
                    <img
                      src={`${process.env.REACT_APP_API}/${item.imageUrl}`}
                      alt={`Details ${index + 1}`}
                      className="img-cover"
                    />
                  </figure>
                </div>
              </Fade>
            </div>
          ))
        }
      </div>
    </section>
  )
}
