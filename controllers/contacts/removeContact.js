const fs = require('fs/promises');
const path = require('path');
const contactsPath = path.resolve('./db/contacts.json');
const { listContacts } = require('./listContacts');
const { getContactById } = require('./getContactById');

const removeContact = async (contactId) => {
  const contact = await getContactById(contactId);
  const contacts = await listContacts();
  newContactList = contacts.filter((item) => item.id !== Number(contactId));
  await fs.writeFile(contactsPath, JSON.stringify(newContactList, null, 2));
  return contact;
};

module.exports = { removeContact };
