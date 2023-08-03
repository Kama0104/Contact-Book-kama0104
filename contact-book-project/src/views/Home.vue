<template>
  <div>
    <h1>Contact Book</h1>
    <!-- Check if contacts exist before using the computed property -->
    <ContactList v-if="contacts" :contacts="sortedContacts" @show-details="showContactDetails" @delete-contact="deleteContact" />
  </div>
</template>

<script>
import ContactList from '@/components/ContactList';
import { computed } from 'vue';
import { getContactsFromLocalStorage, updateLocalStorage } from '@/utils/LocalStorageUtils';

export default {
  components: {
    ContactList,
  },
  props: {
    contacts: Array, // Array of contacts passed as a prop
  },
  computed: {
    sortedContacts() {
      // Check if this.contacts is defined before sorting
      if (this.contacts) {
        // Sort contacts alphabetically by last name before rendering
        return this.contacts.sort((a, b) => a.lastName.localeCompare(b.lastName));
      } else {
        return [];
      }
    },
  },
  methods: {
    showContactDetails(contactId) {
      this.$router.push({ path: `/contact/${contactId}` });
    },
    deleteContact(contactId) {
      this.contacts = this.contacts.filter((contact) => contact.id !== contactId);

      // Update the Local Storage 
      updateLocalStorage(this.contacts);
    },
  },
};
</script>
