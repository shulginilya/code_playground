import { render, screen } from '@testing-library/react';
import AppContainer from "./";

describe("app container tests bundle", () => {
    it("app container must be rendered", () => {
        render(<AppContainer />);
        const appContainer = screen.getByTestId('app_container');
        expect(appContainer).toBeInTheDocument();
    });
});
