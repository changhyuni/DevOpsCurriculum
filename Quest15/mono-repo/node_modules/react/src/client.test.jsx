import React from "react"
import { render } from "@testing-library/react"
import App from "./App"

describe("<App />", () => {
  it("renders header", () => {
    const { getByText } = render(<App />)
    
    // HTTP Header Cheack "Hello World"
    const header = getByText("Hello World")
    expect(header).toBeInTheDocument('해당 페이지에서 Hello World를 찾을 수 없습니다.')
  })
})