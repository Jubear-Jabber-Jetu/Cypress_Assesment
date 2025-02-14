describe('Application Info', () => {
    it('Form Submission Validation ', () => {
        cy.get('[data-test="nav-contact"]').click(); 
        cy.get('[data-test="contact-submit"]').click(); 
        cy.get('[data-test="first-name-error"]')
            .should('be.visible')  
        cy.get('[data-test="first-name"]').type('Jubear');
        cy.get('[data-test="last-name"]').type('Jabber');
        cy.get('[data-test="email"]').type('jubearjabberjetu@gmail.com');
        cy.get('[data-test="subject"]').select('customer-service');
        cy.get('[data-test="message"]').type('This is a test message for validation.This is a test message for validation.');
        cy.get('[data-test="attachment"]').attachFile('empty-file.txt', { allowEmpty: true });
        cy.get('[data-test="contact-submit"]').click(); 
    })

   
});
