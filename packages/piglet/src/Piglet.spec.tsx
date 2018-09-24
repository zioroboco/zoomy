import * as React from "react"
import { render } from "react-testing-library"
import { Piglet } from "./Piglet"

it("renders a zoomy piglet", () => {
  const { getAllByText } = render(<Piglet />)
  expect(getAllByText("🐷")).toBeTruthy()
})
