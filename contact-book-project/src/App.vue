<template>
  <div id="app">
    <header>
      <router-link to="/">Home</router-link>
      <router-link to="/new">Add New Contact</router-link>
    </header>
    <main>
      <router-view :contacts="state.contacts" :add-contact="addContact" :delete-contact="deleteContact" />
    </main>
  </div>
</template>

<script>
import { reactive } from 'vue';
import router from './router';

function getContactsFromLocalStorage() {
  const contacts = JSON.parse(localStorage.getItem('contacts'));
  return contacts ? contacts : [];
}

function updateLocalStorage(contacts) {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}

// to generate a unique ID for a new contact
function generateUniqueId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

export default {
  setup() {
    const state = reactive({
      contacts: getContactsFromLocalStorage(),
    });
    const addContact = (newContact) => {
      newContact.id = generateUniqueId();
      state.contacts.push(newContact);

      updateLocalStorage(state.contacts);
    };

    // delete a contact 
    const deleteContact = (contactId) => {
      state.contacts = state.contacts.filter((contact) => contact.id !== contactId);

      updateLocalStorage(state.contacts);
    };

    return { state, addContact, deleteContact };
  },
  router,
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: #f2f2f2;
  padding: 10px;
}

header a {
  margin-right: 10px;
  text-decoration: none;
}
</style>
