const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

async function listContacts () {
    const data = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(data);
}

async function getContactById(contactId) {
    const allContacts = await listContacts();
    const result = allContacts.find(item => item.id === contactId);
    return result;
}

// function removeContact(contactId) {

// }

// function addContact(name, email, phone) {

// }

module.exports = {
    listContacts,
    getContactById,
    // removeContact, 
    // addContact,
}