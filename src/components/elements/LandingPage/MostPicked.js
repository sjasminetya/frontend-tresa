import React from "react";
import Button from "../Button";
import Fade from "react-reveal/Fade";

export default function MostPicked(props) {
  return props.data.length > 0 && (
    <section className="container" ref={props.refMostPicked}>
      <Fade bottom>
        <h4 className="mb-3" style={{ paddingLeft: "2rem" }}>
          Most Picked
        </h4>
        <div className="container-grid mb-5" style={{ marginLeft: "2rem" }}>
          {props.data.map((item, index) => {
            return (
              <div
                className={`item column-4 ${index === 0 ? "row-2" : "row-1"}`}
                key={index + 1}
              >
                <Fade bottom delay={500 * index}>
                  <div className="card card-featured">
                    <div className="tag">
                      ${item.price}
                      <span className="font-weight-light">
                        per {item.unit}
                      </span>
                    </div>
                    <figure className="img-wrapper">
                      <img
                        src={`${process.env.REACT_APP_API}/${item.imageId[0].imageUrl}`}
                        alt={item.title}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        className="stretched-link d-block text-white"
                        type="link"
                        href={`/properties/${item._id}`}
                        isExternal
                      >
                        <h5>{item.title}</h5>
                      </Button>
                      <span>
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </Fade>
    </section>
  )
}
