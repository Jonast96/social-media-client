describe("Logout test", () => {
  beforeEach(() => {
    cy.visit("./");
    cy.clearLocalStorage();
  });

  it("can login", () => {
    cy.get("#registerModalLabel")
      .should("have.text", "Create Profile")
      .should("be.visible");
    cy.wait(1000);
    cy.get("#registerForm")
      .find(".btn-outline-success")
      .should("be.visible")
      .click();
    cy.get("#loginModalLabel")
      .should("have.text", "Login")
      .should("be.visible");
    const email = "jon@noroff.no";
    cy.wait(1000);
    const password = "Password";
    cy.get("#loginEmail").type(`${email}`);
    cy.get("#loginPassword").type(`${password}`);
    cy.wait(1000);
    cy.get("#loginForm .btn-success").should("be.visible").click();
  });
});
