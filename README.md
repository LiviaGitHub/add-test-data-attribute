# How to add data testid to react component

## Overview
- data-testid is an attribute used to identify a DOM (Document Object Model) node for testing purposes. It should be used as a handler to the test code. We need to make sure its value is unique. Therefore, we do not cause conflicts between components.

## Need for data-testid
- The React testing library is primarily used for black box functional testing. Selectors can be ambiguous and change unexpectedly when the implementation changes, hence the need for data-testid, they are unambiguous.

## Where do we put data-testid?
- To enable test automation support in applications using a React testing library, we need to provide a special data-testid attribute for each component. It must be placed on the containing element of each section and all related subsections.

## First step
- A good practice is to create a variable with the command to get the data-testid.
- As in this example we are using cypress, we need to create the `const` in support > commands folder.