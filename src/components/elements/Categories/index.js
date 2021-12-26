import React from "react";
import Button from "../Button";
import Fade from "react-reveal/Fade";

function Categories({ data }) {
  return data.length > 0 && data.map((item, index) => (
    <section
      className="container"
      style={{ paddingLeft: "2rem" }}
      key={`Category-${index + 1}`}
    >
      <Fade bottom>
        <h4 className="mb-3 font-weight-medium">{item.name}</h4>
        <div className="container-grid">
          {item.itemId.map((val, v) => (
              <div
                className="item column-3 row-1"
                key={`Category-${index + 1}-Item${v + 1}`}
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
                        src={`${process.env.REACT_APP_API}/${val.imageId[0].imageUrl}`}
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
                        <h5>{val.title}</h5>
                      </Button>
                      <span className="text-gray-500">
                        {
                          val.country ? val.city + ", " + val.country : val.city
                        }
                      </span>
                    </div>
                  </div>
                </Fade>
              </div>
            ))}
        </div>
      </Fade>
    </section>
  ));
}

export default Categories;
