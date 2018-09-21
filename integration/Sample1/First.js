describe('My First Test',function () {
it('Travel website',function () {
    cy.visit('https://www.phptravels.net/')

    cy.get('#collapse > :nth-child(1) > .active > a').invoke('text')
	cy.get(':nth-child(6) > .loader').invoke('text')
   // cy.contains('HOME')

    cy.get('[data-title="flights"] > a > .hidden-xs').click()

    cy.get('#s2id_location_from > .select2-choice > .select2-chosen').click()
    cy.get('#select2-drop > .select2-search > .select2-input').type('Ban')
    cy.get('.select2-highlighted > .select2-result-label').click()

    //cy.get('#s2id_location_to > .select2-choice').click()
    //cy.get('#select2-drop > .select2-search > .select2-input').type('Aal')
    //cy.get('.select2-highlighted > .select2-result-label').clcik()

    
})
})