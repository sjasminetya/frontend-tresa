import React from 'react'
import ReactHtmlParser from 'react-html-parser'

export default function Description({ data }) {
  return (
    <main>
      <h4>About this place</h4>
      <span className="text-gray-500">
        {ReactHtmlParser(data.description)}
      </span>
      <div className="container mt-4">
        <div className="row">
          {
            data.featureId.map((item, index) => (
              <div className="col-3 mb-4" key={`Features-${index + 1}`}>
                <img width={38} src={`${process.env.REACT_APP_API}/${item.imageUrl}`} alt={item.name} />
                <div className="d-flex">
                  <h6>{item.qty} <span className="text-gray-500">{item.name}</span></h6>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </main>
  )
}
