import React, { useState } from 'react'
import propTypes from 'prop-types'
import './index.scss'

export default function Number(props) {
    const { value, name, suffix, max, min, placeholder, preffix, isSuffixPlural } = props
    const [inputValue, setInputValue] = useState(`${preffix}${value}${suffix}`)
    const onChange = e => {
        let value = String(e.target.value)
        if (preffix) value = value.replace(preffix)
        if (suffix) value = value.replace(suffix)

        const patternNum = new RegExp("[0-9]*")
        const isNumeric = patternNum.test(value)
        if (isNumeric && +value <= max && +value >= min) {
            props.onChange({
                target: {
                    name: name,
                    value: +value
                }
            })
            setInputValue(`${preffix}${value}${suffix}${isSuffixPlural && value > 1 ? "s" : ""}`)
        }
    }

    const minus = () => {
        value > min &&
            onChange({
                target: {
                    name: name,
                    value: +value - 1
                }
            })
    }

    const plus = () => {
        value < max &&
            onChange({
                target: {
                    name: name,
                    value: +value + 1
                }
            })
    }

    return (
        <div className={["input-number mb-3", props.className].join(" ")}>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text minus" onClick={minus} style={{ cursor: "pointer" }}>
                        -
                    </span>
                </div>
                <input
                    min={min}
                    max={max}
                    name={name}
                    pattern="[0-9]*"
                    className="form-control"
                    placeholder={placeholder ? placeholder : "0"}
                    value={String(inputValue)}
                    onChange={onChange}
                />
                <div className="input-group-prepend">
                    <span className="input-group-text plus" onClick={plus} style={{ cursor: "pointer" }}>
                        +
                    </span>
                </div>
            </div>
        </div>
    )
}

Number.defaultProps = {
    suffix: "",
    min: 1,
    max: 1,
    preffix: ""
}

Number.propTypes = {
    value: propTypes.oneOfType([propTypes.string, propTypes.number]),
    className: propTypes.string,
    placeholder: propTypes.string,
    onChange: propTypes.func,
    isSuffixPlural: propTypes.bool
}