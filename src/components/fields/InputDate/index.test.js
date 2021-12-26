import React, { useState } from "react"
import { render, fireEvent } from "@testing-library/react"
// import { screen } from "@testing-library/dom"
import InputDate from "./index"

const TestInput = () => {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: "selection"
    })

    const handleChange = e => {
        setValue(e.target.value)
    }

    return (
        <InputDate
            onChange={handleChange}
            name="value"
            value={value}
        />
    )
}

const setup = () => {
    const { container } = render(<TestInput />)
    const wrapper = container.querySelector('.input-date')
    const input = container.querySelector('input.form-control')
    return { container, wrapper, input }
}

test('Should have wrapper with className .input-date', () => {
    const { wrapper } = setup()
    expect(wrapper).toBeInTheDocument()
})

test('Should have tag <input> and has className .input-date', () => {
    const { input } = setup()
    expect(input).toBeInTheDocument()
})

test('should show date picker when click input field', () => {
    const { input, container } = setup()
    fireEvent.click(input, { button: 1 })
    const datePickerWrapper = container.querySelector('.date-range-wrapper')
    expect(datePickerWrapper).toBeInTheDocument()
})