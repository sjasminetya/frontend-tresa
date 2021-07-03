import Date from 'elements/Form/InputDate'
import Number from 'elements/Form/InputNumber'
import React, { useState } from 'react'

export default function InputBooking({data}) {
    const [nights, setNights] = useState("1")

    const handleChange = e => {
        setNights(e.target.value)
    }

    return (
        <div className="border rounded-lg p-5">
            <h4>Start Booking</h4>
            <h1 className="text-teal">${data.price} <span className="text-gray-500" style={{fontWeight: 200}}>per nights</span></h1>
            <h6 className="pt-2">How long you will stay?</h6>
            <Number 
                max={30} 
                name="nights" 
                onChange={handleChange} 
                value={nights} 
                suffix=" night"
                isSuffixPlural 
            />
            <h6 className="pt-2">Pick a Date</h6>
            <Date />
        </div>
    )
}
