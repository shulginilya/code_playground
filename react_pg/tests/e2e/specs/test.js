describe("e2e", () => {

	context('homepage and 04', () => {
		it("home page should be shown", () => {
			cy.visit("/");
		});

        it("404 page should be shown", () => {
			cy.visit("/not_found");
		});
    });

});
