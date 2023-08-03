<template>
  <div id="app">
    <header>
      <router-link to="/">Home</router-link>
      <router-link to="/new">Add New Contact</router-link>
    </header>
    <main>
      <router-view :contacts="contacts" @add-contact="addContact" @delete-contact="deleteContact" />
    </main>
  </div>
</template>

<script>
import { reactive } from 'vue';
import router from './router';

export default {
  setup() {
    // to create a reactive state
    const state = reactive({
      contacts: getContactsFromLocalStorage(),
    });

    // Function to add a new contact to the contact list
    const addContact = (newContact) => {
      // generate a unique ID for the new contact
      newContact.id = generateUniqueId();

      // Add the new contact to the state's contacts array
      state.contacts.push(newContact);

      // Update the Local Storage 
      updateLocalStorage(state.contacts);
    };

    // Function to delete a contact from the contact list
    const deleteContact = (contactId) => {
      // Filter out the contact with the provided ID from the contacts array
      state.contacts = state.contacts.filter((contact) => contact.id !== contactId);

      // Update the Local Storage with the updated contacts array
      updateLocalStorage(state.contacts);
    };

    // Function to get contacts from Local Storage
    function getContactsFromLocalStorage() {
      const contacts = JSON.parse(localStorage.getItem('contacts'));
      return contacts ? contacts : [];
    }

    // Function to update Local Storage with the current contacts array
    function updateLocalStorage(contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }

    // Function to generate a unique ID for a new contact
    function generateUniqueId() {
      return '_' + Math.random().toString(36).substr(2, 9);
    }

    return { state, addContact, deleteContact };
  },
  router,
};
</script>

<style>

</style>
