<template>
  <div>
    <h1>Contact Book</h1>
    <ContactList :contacts="sortedContacts" @show-details="showContactDetails" @delete-contact="deleteContact" />
  </div>
</template>

<script>
import ContactList from '@/components/ContactList';
import { computed } from 'vue';
import { updateLocalStorage } from '@/utils/LocalStorageUtils';

export default {
  components: {
    ContactList,
  },
  props: {
    contacts: Array, // Array of contacts
  },
  computed: {
    sortedContacts() {
      // Sort contacts alphabetically by last name before rendering
      return this.contacts.sort((a, b) => a.lastName.localeCompare(b.lastName));
    },
  },
  methods: {
    showContactDetails(contactId) {
      // Use Vue Router to navigate to the contact details view
      this.$router.push({ path: `/contact/${contactId}` });
    },
    deleteContact(contactId) {
      // Filter out the contact with the provided ID from the contacts array
      this.contacts = this.contacts.filter((contact) => contact.id !== contactId);

      // Update the Local Storage with the updated contacts array
      updateLocalStorage(this.contacts);
    },
  },
};
</script>
