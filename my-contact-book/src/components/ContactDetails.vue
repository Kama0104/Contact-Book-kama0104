<template>
    <div>
      <h2>Contact Details</h2>
      <div>
        <p><strong>First Name:</strong> {{ contact.firstName }}</p>
        <p><strong>Last Name:</strong> {{ contact.lastName }}</p>
        <p><strong>Email:</strong> {{ contact.email }}</p>
      </div>
      <button @click="deleteContact">Delete Contact</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { getContactById, deleteContact } from '../utils';
  
  export default {
    setup() {
      const route = useRouter();
      const contactId = ref(route.params.id);
      const contact = ref(getContactById(contactId.value));
  
      // Function to delete the contact
      const deleteContact = () => {
        deleteContact(contactId.value);
        route.push({ name: 'ContactList' });
      };
  
      return { contact, deleteContact };
    },
  };
  </script>
  