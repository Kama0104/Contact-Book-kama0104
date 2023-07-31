const CONTACTS_KEY = 'contacts';

// to get contacts from local storage
export function getContacts() {
  const contactsJSON = localStorage.getItem(CONTACTS_KEY);
  return contactsJSON ? JSON.parse(contactsJSON) : [];
}

// to get a contact by ID
export function getContactById(id) {
  const contacts = getContacts();
  return contacts.find((contact) => contact.id === id);
}

// to save contacts to local storage
export function saveContacts(contacts) {
  localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
}

// to add a new contact
export function addContact(contact) {
  const contacts = getContacts();
  const newContact = { id: Date.now().toString(), ...contact };
  contacts.push(newContact);
  saveContacts(contacts);
}

// to update an existing contact
export function updateContact(id, updatedContact) {
  const contacts = getContacts();
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index !== -1) {
    contacts[index] = { id, ...updatedContact };
    saveContacts(contacts);
  }
}

// to delete a contact
export function deleteContact(id) {
  const contacts = getContacts();
  const filteredContacts = contacts.filter((contact) => contact.id !== id);
  saveContacts(filteredContacts);
}
