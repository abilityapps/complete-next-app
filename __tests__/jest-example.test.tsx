import JestExample from "@/app/jest-example/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("JestExample", () => {
	it("renders a heading", () => {
		render(<JestExample />);

		const heading = screen.getByRole("heading", { level: 1 });

		expect(heading).toBeInTheDocument();
	});
});
