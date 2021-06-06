import React from 'react'
import propTypes from 'prop-types'
import './index.scss'

export default function Number(props) {
    const {value, name, suffix, plus, minus} = props
    return (
        <div className={["input-number mb-3", props.className].join(" ")}>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text minus" onClick={minus} style={{cursor: "pointer"}}>
                        -
                    </span>
                </div>
                <input
                    name={name}
                    className="form-control"
                    value={`${value} ${suffix}`}
                    disabled
                />
                <div className="input-group-prepend">
                    <span className="input-group-text plus" onClick={plus} style={{cursor: "pointer"}}>
                        +
                    </span>
                </div>
            </div>
        </div>
    )
}

Number.defaultProps = {
    suffix: ""
}

Number.propTypes = {
    value: propTypes.oneOfType([propTypes.string, propTypes.number]),
    className: propTypes.string,
    minus: propTypes.func,
    plus: propTypes.func
}