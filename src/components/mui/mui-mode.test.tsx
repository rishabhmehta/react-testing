import { render, screen } from "../../test-utils"
import { MuiMode } from "./mui-mode"

describe("MuiMode", () => {
  /* 
  GOOD FOR ONE OFF SCENARIOS
  test("renders text correctly", () => {
    render(<MuiMode />, {
      wrapper: AppProviders,
    })
    const headingElement = screen.getByRole("heading")
    expect(headingElement).toHaveTextContent("dark mode")
  })
  */

  test("renders text correctly", () => {
    render(<MuiMode />)
    const headingElement = screen.getByRole("heading")
    expect(headingElement).toHaveTextContent("dark mode")
  })
})
