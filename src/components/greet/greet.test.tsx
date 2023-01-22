import { render, screen } from "@testing-library/react"
import { Greet } from "./Greet"

test("Greet renders correctly", () => {
  render(<Greet />)
  const textElement = screen.getByText("Hello")
  expect(textElement).toBeInTheDocument()
})

test("Greet renders with a name", () => {
  render(<Greet name="Rishabh" />)
  const textElement = screen.getByText("Hello Rishabh")
  expect(textElement).toBeInTheDocument()
})

// test.only("Greet renders with a name", () => {
//   render(<Greet name="Rishabh" />)
//   const textElement = screen.getByText("Hello Rishabh")
//   expect(textElement).toBeInTheDocument()
// })

// test.skip("Greet renders with a name", () => {
//   render(<Greet name="Rishabh" />)
//   const textElement = screen.getByText("Hello Rishabh")
//   expect(textElement).toBeInTheDocument()
// })
