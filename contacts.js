const fs = require('fs/promises');
const path = require('path');
const {nanoid} = require('nanoid');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

async function listContacts () {
    const data = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(data);
}

async function getContactById(contactId) {
    const allContacts = await listContacts();
    const result = allContacts.find(item => item.id === contactId);
    return result || null;
}

// function removeContact(contactId) {

// }

async function addContact({name, email, phone}) {
    const allContacts = await listContacts();

    const newContact = {
        id: nanoid(),
        name,
        email,
        phone,
    }

    allContacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
    return newContact;
}

module.exports = {
    listContacts,
    getContactById,
    // removeContact, 
    addContact,
}