import * as React from "react"
import { render } from "react-testing-library"
import Mooey from "./Mooey"

it("renders a zoomy mooey", () => {
  const { getAllByText } = render(<Mooey />)
  expect(getAllByText("🐮")).toBeTruthy()
})
