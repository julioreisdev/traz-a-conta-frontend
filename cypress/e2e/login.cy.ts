describe("/", () => {
  it("Deve fazer login com usuário válido.", () => {
    const user = {
      user: "test@gmail.com",
      password: "123",
    };
    cy.visit("http://localhost:3000");
    cy.get("#user").type(user.user);
    cy.get("#password").type(user.password);
    cy.get("#loginButton").click();
    cy.intercept("POST", "/login").as("Login");
    cy.wait("@Login");
  });
});
