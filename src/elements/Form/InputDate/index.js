import React, { useState } from 'react'
import IconDate from 'assets/images/icons/ic_calendar.svg'
import { DateRangePicker } from 'rsuite'
import './index.scss'

export default function Date(props) {
    const [isShow, setIsShow] = useState(false)
    return (
        <div className={["input-number mb-3", props.className].join(" ")}>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text bg-date">
                        <img src={IconDate} alt="" />
                    </span>
                </div>
                <input type="text" placeholder="07 Jun - 07 Jun" className="form-control" onClick={() => setIsShow(true)} />
                <DateRangePicker
                    placement="bottomStart"
                    format="DD MMM"
                    style={{ width: 280 }}
                    open={isShow}
                />
            </div>
        </div>
    )
}
