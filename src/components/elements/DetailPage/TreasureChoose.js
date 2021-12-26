import React from "react";
import Button from "../Button";
import Fade from "react-reveal/Fade";

function TreasureChoose({ data }) {
  return data.length > 0 && (
    <section
      className="container"
      style={{ paddingLeft: "2rem" }}
    >
      <Fade bottom>
        <h4 className="mb-3 font-weight-medium">Treasure to Choose</h4>
        <div className="container-grid">
          {data.map((val, v) => (
              <div
                className="item column-3 row-1"
                key={v}
              >
                <Fade bottom delay={300 * v}>
                  <div className="card">
                    {val.isPopular && (
                      <div className="tag">
                        Pupular <span className="font-weight-light">Choice</span>
                      </div>
                    )}
                    <figure className="img-wrapper" style={{ height: 180 }}>
                      <img
                        src={`${process.env.REACT_APP_API}/${val.imageUrl}`}
                        alt={val.title}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        className="stretched-link d-block custom-color"
                        type="link"
                        href={`/properties/${val._id}`}
                      >
                        <h5>{val.name}</h5>
                      </Button>
                      <span className="text-gray-500">
                        {val.type}
                      </span>
                    </div>
                  </div>
                </Fade>
              </div>
            ))}
        </div>
      </Fade>
    </section>
  )
}

export default TreasureChoose;
