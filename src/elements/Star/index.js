import React from 'react'
import propTypes from 'prop-types'
import './index.scss'

export default function Star(props) {
    const decimals = Number(props.value) % 1
    const star = []
    const starPlaceholder = []
    let leftPos = 0
    
    for (let index = 0; index < 5 && index < props.value - decimals; index++) {
        leftPos = leftPos + props.width
        star.push(
            <div className="star" key={`Star-${index + 1}`} style={{ left: index * props.width, width: props.width, height: props.height, marginRight: props.spacing }}></div>
        )

    }

    for (let index = 0; index < 5; index++) {
        starPlaceholder.push(
            <div className="star placeholder" key={`StarPlaceholder-${index + 1}`} style={{ left: index * props.width, height: props.height, width: props.width, marginRight: props.spacing }}></div>
        )
    }

    if (decimals > 0 && props.value <= 5) {
        star.push(
            <div className="star" key={`StarDecimal`} style={{ left: leftPos, height: props.height, width: decimals * props.width - props.spacing }}></div>
        )
    }
    return (
        <div className={['stars', props.className].join(" ")} style={{height: props.height}}>
            {starPlaceholder}
            {star}
        </div>
    )
}

Star.propTypes = {
    className: propTypes.string,
    value: propTypes.number,
    width: propTypes.number,
    height: propTypes.number,
    spacing: propTypes.number,
}