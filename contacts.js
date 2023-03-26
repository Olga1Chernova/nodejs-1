const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

const listContacts = async() => {
    const data = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(data);
}

// function getContactById(contactId) {

// }

// function removeContact(contactId) {

// }

// function addContact(name, email, phone) {
    
// }

module.exports = {
    listContacts,
    // getContactById,
    // removeContact, 
    // addContact,
}