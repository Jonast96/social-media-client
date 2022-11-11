describe("Authenticated user", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerForm button")
      .contains("Login")
      .should("be.visible")
      .click();
    cy.wait(500);
    const email = "jon@noroff.no";
    const password = "Password";
    cy.get("#loginEmail").should("exist").type(`${email}`);
    cy.get("#loginPassword").should("exist").type(`${password}{enter}`);
    cy.wait(1000);
  });

  it("Can create a new post", () => {
    cy.get("#footerActions a").contains("New Post").click();
    cy.get("#postForm")
      .should("exist")
      .within(() => {
        cy.get("#postTitle")
          .should("exist")
          .type("This is my test title", { delay: 100 });
        cy.get("#postTags")
          .should("exist")
          .type("test1, test2", { delay: 100 });
        cy.get("#postMedia")
          .should("exist")
          .type(
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg",
            { delay: 100 }
          );
        cy.get("#postBody")
          .should("exist")
          .type("This is my test body", { delay: 100 });
        cy.get("button[data-action='submit']").should("exist").click();
      });
  });
});
