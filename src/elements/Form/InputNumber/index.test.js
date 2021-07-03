import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Number from "./index"

const TestInput = () => {
    const [value, setValue] = React.useState("")
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <Number
            name="value"
            max={30}
            value={value}
            onChange={handleChange}
        />
    )
}

const setup = () => {
    const { container } = render(<TestInput />)
    const input = container.querySelector(`input.form-control[name="value"]`)

    return {
        input
    }
}

test("should able to change value", () => {
    const { input } = setup()

    fireEvent.change(input, { target: { value: 23 } })
    console.log(input.value)
    expect(input.value).toBe("23")
})

test("should not able to change when reach max value", () => {
    const { input } = setup()

    fireEvent.change(input, { target: { value: 33 } })
    expect(input.value).toBe("")
})