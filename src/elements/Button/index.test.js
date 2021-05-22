import React from "react"
import {render} from "@testing-library/react"
import Button from "./index"

test("should not allowed click button if isDisabled is present", () => {
    const {container} = render(<Button isDisabled></Button>)

    expect(container.querySelector("span.disabled")).toBeInTheDocument()
})

test("should render loading", () => {
    const {container, getByText} = render(<Button isLoading></Button>)

    expect(getByText(/loading/i)).toBeInTheDocument()
    expect(container.querySelector("span.spinner-border")).toBeInTheDocument()
})