describe("Authentication", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
  });

  it("will login", () => {
    const email = "jon@noroff.no";
    const password = "Password";
    cy.visit("/");
    cy.wait(1000);
    cy.get(".btn-close:visible").click({ force: true });
    cy.get("button[data-auth='login']:visible").click({ force: true });
    cy.wait(1500);
    cy.get("input[type='email']:visible").should("exist").type(`${email}`);
    cy.get("input[type='password']:visible")
      .should("exist")
      .type(`${password}`);
    cy.get(".btn-success:visible").click({ force: true });
    cy.wait(3000);
    cy.then(
      () => expect(window.localStorage.getItem("profile")).to.not.be.null
    );
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
    cy.url().should("include", "profile");
  });

  it("Validates email input", () => {
    const password = "Password";
    cy.visit("/");
    cy.wait(1000);
    cy.get(".btn-close:visible").click({ force: true });
    cy.get("button[data-auth='login']:visible").click({ force: true });
    cy.wait(1500);
    cy.get("input[type='email']:visible")
      .should("exist")
      .type("/https://nf-api.onrender.com");
    cy.get("input[type='password']:visible")
      .should("exist")
      .type(`${password}`);
    cy.get(".btn-success:visible").click({ force: true });
    cy.wait(3000);
    cy.then(() => expect(window.localStorage.getItem("profile")).to.be.null);
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
    cy.url().should("not.include", "profile");
  });

  it("Validates password", () => {
    const email = "jon@noroff.no";
    const password = "Password";
    cy.visit("/");
    cy.wait(1000);
    cy.get(".btn-close:visible").click({ force: true });
    cy.get("button[data-auth='login']:visible").click({ force: true });
    cy.wait(1500);
    cy.get("input[type='email']:visible").should("exist").type(`${email}`);
    cy.get("input[type='password']:visible")
      .should("exist")
      .type(`${password}`);
    cy.get(".btn-success:visible").click({ force: true });
    cy.wait(3000);
    cy.then(() => expect(window.localStorage.getItem("profile")).to.exist);
    cy.then(() => expect(window.localStorage.getItem("token")).to.exist);
    cy.url().should("include", "profile");
  });
});
