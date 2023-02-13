describe("test", () => {
  it("should connect to metamask", () => {
    cy.visit("http://localhost:3000");

    cy.contains("MetaMask").should("be.visible").click();

    cy.acceptMetamaskAccess();
  });
});
