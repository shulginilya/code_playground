import { render, screen } from '@testing-library/react';
import NotFoundContainer from "./";

describe("not found page tests bundle", () => {
    it("not found page must be rendered", () => {
        render(<NotFoundContainer />);
        const notFoundContainer = screen.getByTestId('not_found_container');
        expect(notFoundContainer).toBeInTheDocument();
    });
});
