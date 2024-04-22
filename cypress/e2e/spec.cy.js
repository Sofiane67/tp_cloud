describe('Test Invoice APP', () => {
  it("La page d'accueil devrait afficher la liste des utilisateurs", () => {
    cy.visit('http://127.0.0.1:5501/index.html')
    cy.request("GET", "http://localhost:5500/api/invoices").then(res => {
      expect(res.status).to.eq(200)
      expect(res.body.status).to.eq("success") // Utiliser res.body au lieu de res.json()
      expect(res.body.data).to.be.an('array').that.is.not.empty

      cy.get('.invoices').should('exist');
    })


  })
})
