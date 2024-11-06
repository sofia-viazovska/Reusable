'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Sofia', phone: '+380501234567' }
];

const findPhoneByName = (name) => {
  for (const contact of phonebook) {
    if (contact.name === name) return contact.phone;
  }

  return 'Not found';
};

module.exports = { phonebook, findPhoneByName };
