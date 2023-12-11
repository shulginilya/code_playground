import { render, screen } from "@testing-library/react";

import { paginationTestProps } from "./Pagination.data";
import { Pagination } from "./Pagination";

jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: () => jest.fn(),
}));

describe("Pagination", () => {
	beforeEach(() => {
		render(<Pagination {...paginationTestProps} />);
	});

	it("should render pagination", () => {
		const paginationWrapper = screen.getByTestId("pagination_root");
		expect(paginationWrapper).toBeInTheDocument();
	});

	it("should render pagination with a correct amount of pages", () => {
		const paginationItems = screen.queryAllByTestId("pagination_item");
		expect(paginationItems.length).toBe(2);
	});

	it("should highlight current page: TODO", () => {
		expect(1).toBe(1);
	});

	it("should navigate to correct page after click: TODO", () => {
		expect(1).toBe(1);
	});
});
