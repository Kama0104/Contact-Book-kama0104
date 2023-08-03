<template>
  <div>
    <h2>Add New Contact</h2>
    <ContactForm @add-contact="addContact" />
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm';
import { getContactsFromLocalStorage, updateLocalStorage } from '@/utils/LocalStorageUtils';

export default {
  components: {
    ContactForm,
  },
  props: {
    contacts: Array, // Array of contacts
  },
  methods: {
    addContact(newContact) {
      // Generate a unique ID for the new contact
      newContact.id = generateUniqueId();

      // Add the new contact to the contacts array
      this.contacts.push(newContact);

      // Update the Local Storage with the updated contacts array
      updateLocalStorage(this.contacts);

      // Use Vue Router to navigate to the contact details view for the new contact
      this.$router.push({ path: `/contact/${newContact.id}` });
    },
  },
};

// Helper function to generate a unique ID for a new contact
function generateUniqueId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}
</script>
