'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
  // Define constant object with single field `name`
  const obj1 = { name: 'Name' };

  // Define variable object with single field `name`
  let obj2 = { name: 'Name' };

  // Try to change field `name`
  obj1.name = 'Sofia';
  obj2.name = 'Sofia';
  obj2 = { name: 'NewName' };
};

module.exports = { fn };
