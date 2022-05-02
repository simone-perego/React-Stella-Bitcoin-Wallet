describe("Test", function () {
  it("starts app", function () {
    cy.exec("npm start");
  });

  it("loads", function () {
    cy.visit("http://localhost:3000/");
  });

  it("logs in", function () {
    cy.visit("http://localhost:3000/");

    cy.get("input[name=seed]").type(123);

    cy.url().should("include", "/");

    cy.contains("LOGIN").click(); 
  });

  it("adds a BTC", function () {
    cy.get(".toggle").click({ multiple: true, force:true });

    cy.get("input[name=buy]").click({ multiple: true, force: true });

    cy.get(".toggle").click({ multiple: true });
  });

  it("logs out", function () {
    cy.get(".icon-logout-button").click(); 
  });
  
  it("fails to log", function(){
    cy.get("input[name=seed]").type(111);

    cy.url().should("include", "/");

    cy.contains("LOGIN").click();
  });
});
