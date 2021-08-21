import React, { useRef } from 'react'
import propTypes from 'prop-types'
import './index.scss'

const InputFile = (props) => {
    const { value, placeholder, name, accept, prepend, append, outerClassName, inputClassName } = props
    const refInputFile = useRef(null)

    return (
        <div className={["input-text mb-3", outerClassName].join(" ")}>
            <div className="input-group">
                {
                    prepend && (
                        <div className="input-group-prepend bg-gray-900">
                            <span className="input-group-text">{prepend}</span>
                        </div>
                    )
                }
                <input type="file" accept={accept} ref={refInputFile} name={name} value={value} onChange={props.onChange} className="d-none" />
                <input onClick={() => refInputFile.current.click()} defaultValue={value} placeholder={placeholder} className={["form-control", inputClassName].join(" ")} />
                {
                    append && (
                        <div className="input-group-append bg-gray-900">
                            <span className="input-group-text">{append}</span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default InputFile

InputFile.defaultProps = {
    placeholder: "Browse a file..."
}

InputFile.propTypes = {
    name: propTypes.string.isRequired,
    accept: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
    append: propTypes.oneOfType([propTypes.number, propTypes.string]),
    outerClassName: propTypes.string,
    inputClassName: propTypes.string
}