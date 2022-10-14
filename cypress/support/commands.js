// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//

import {getTestId} from './commands/testid';

Cypress.Commands.add('getTestId', getTestId);