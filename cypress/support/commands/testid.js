/**
 * Returns the reference to the element specified by data testid attribute
 *
 * @param {string} testid
 */
 export const getTestId = (testid) => cy.get(`[data-testid=${testid}]`);