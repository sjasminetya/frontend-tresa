import React, { useState, useRef, useEffect } from 'react'
import IconDate from 'assets/icons/ic_calendar.svg'
import propTypes from 'prop-types'
import { DateRange } from 'react-date-range'
import { formatDate } from '../../../utils'
import './index.scss'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

export default function InputDate(props) {
  const { value, placeholder } = props
  const [isShow, setIsShow] = useState(false)
  const refDate = useRef(null)
  const displatDate = `${value.startDate ? formatDate(value.startDate) : ""}${value.endDate ? " - " + formatDate(value.endDate) : ""}`

  const handleDateChange = value => {
    props.onChange(value.selection)
  }

  const handleClickOutside = event => {
    if (refDate.current && !refDate.current.contains(event.target)) {
      setIsShow(false)
    }
  }

  const check = focus => {
    focus.indexOf(1) < 0 && setIsShow(false)
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.addEventListener("mousedown", handleClickOutside)
    }
  }, [isShow])
  return (
    <div ref={refDate} className={["input-date mb-3", props.className].join(" ")}>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text bg-date">
            <img src={IconDate} alt="" />
          </span>
        </div>
        <input
          readOnly
          type="text"
          placeholder={placeholder}
          value={displatDate}
          className="form-control"
          onClick={() => setIsShow(prev => !prev)}
        />
        {
          isShow && (
            <div className="date-range-wrapper">
              <DateRange
                editableDateInputs={true}
                onChange={handleDateChange}
                moveRangeOnFirstSelection={false}
                onRangeFocusChange={check}
                ranges={[value]}
              />
            </div>
          )
        }
      </div>
    </div>
  )
}

InputDate.propTypes = {
  value: propTypes.object,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  className: propTypes.string
}