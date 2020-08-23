describe('Tech Unity Test Flows', () => {
    it('Open Existing Ticket FLow', () => {
        cy.visit('https://portal.ebs-next.com/CspTest/login.aspx')
        cy.login('Custuser01','123')
        cy.url().should('include', '/customer/index.aspx')
        cy.contains('Support Tickets')
            .click()
        cy.get('#MainContent_repSelectlist_btnview_0')
            .click()
        cy.get('#MainContent_txtResponse')
            .type('This is Cypress Test')
        cy.get('#MainContent_btnReply')
            .click()
        cy.get('#MainContent_repSelectlist_btnview_0')
            .click()
        cy.contains('This is Cypress Test').should('be.visible')
        cy.get('#MainContent_btnClose')
            .click()
        cy.logout()
        
    })
    it('Create new Ticket FLow', () => {
        cy.visit('https://portal.ebs-next.com/CspTest/login.aspx')
        cy.login('Custuser01','123')
        cy.contains('Support Tickets')
            .click()
        cy.get('button[name="btncreate"]')
            .click()
        cy.get('select[name= "ctl00$MainContent$ddlMajorcategory"]').select('Rental')        
        cy.get('#MainContent_ddlshiptolocation').select('14657 PEBBLE BEND DR-HOUST')
        cy.get('#MainContent_txtDescription')
            .type('This is a cypress new Request')
        cy.get('#MainContent_txttitle')
            .type('Rental Request')
        cy.get('#MainContent_btnSendticket')
            .click()
        cy.logout()
        
    })

    it('Current Rental Flow', () => {
        cy.visit('https://portal.ebs-next.com/CspTest/login.aspx')
        cy.login('Custuser01','123')
        cy.contains('Current Rentals')
            .click()
        cy.get('#MainContent_btnnewrental')
            .click()
        cy.get('#MainContent_ddlMajorcategory')
            .select('Accounts Payable')
        cy.get('#MainContent_txtDescription')
            .type('This is Current Rental Request', {force: true})
        cy.get('#MainContent_btnSendticket')
            .click()
        
            cy.logout()
        
    })
  })