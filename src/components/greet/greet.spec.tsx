import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

describe("Greet", () => {
  it("renders correctly", () => {
    render(<Greet />)
    const textElement = screen.getByText("Hello")
    expect(textElement).toBeInTheDocument()
  })
})

describe("Nested", () => {
  it("renders with a name", () => {
    render(<Greet name="Rishabh" />)
    const textElement = screen.getByText("Hello Rishabh")
    expect(textElement).toBeInTheDocument()
  })
})

/*
test.only
describe("Greet", () => {
  fit("renders correctly", () => {
    render(<Greet />)
    const textElement = screen.getByText("Hello")
    expect(textElement).toBeInTheDocument()
  })
})


describe("Nested", () => {
  fit("renders with a name", () => {
    render(<Greet name="Rishabh" />)
    const textElement = screen.getByText("Hello Rishabh")
    expect(textElement).toBeInTheDocument()
  })
})

test.skip
describe("Greet", () => {
  xit("renders correctly", () => {
    render(<Greet />)
    const textElement = screen.getByText("Hello")
    expect(textElement).toBeInTheDocument()
  })
})

describe("Nested", () => {
  xit("renders with a name", () => {
    render(<Greet name="Rishabh" />)
    const textElement = screen.getByText("Hello Rishabh")
    expect(textElement).toBeInTheDocument()
  })
})
*/
