const fs = require('fs/promises');
const crypto = require('crypto');
const path = require('path');
const contactsPath = path.resolve('./db/contacts.json');
const { listContacts } = require('./listContacts');

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = {
    id: crypto.randomInt(0, 100000),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};
module.exports = { addContact };
