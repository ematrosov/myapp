import { render, screen } from "@testing-library/react";
import Message from "./message";

describe("Message", () => {
    it("matches snanpshot online", () => {
        const component = render(<Message text="Test text" />)

        expect(component).toMatchSnapshot()
    })

    it("Should contain our text", () => {
        render(<Message text="Test text" />)

        const wrapper = screen.getByText(/Test/i)

        expect(wrapper).toBeInTheDocument()
    })
})