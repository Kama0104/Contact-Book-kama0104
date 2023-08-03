<template>
  <div>
    <h2>Edit Contact</h2>
    <EditContactForm :contact="contact" @update-contact="updateContact" @cancel-edit="cancelEdit" />
  </div>
</template>

<script>
import EditContactForm from '@/components/EditContactForm';
import { updateLocalStorage } from '@/utils/LocalStorageUtils';

export default {
  components: {
    EditContactForm,
  },
  props: {
    contacts: Array, // Array of contacts
  },
  data() {
    return {
      contact: null,
    };
  },
  created() {
    // Get the contact ID from the route params
    const contactId = this.$route.params.id;

    // Find the contact with the corresponding ID in the contacts array
    this.contact = this.contacts.find((contact) => contact.id === contactId);
  },
  methods: {
    updateContact(updatedContact) {
      // Find the index of the contact to be updated in the contacts array
      const index = this.contacts.findIndex((contact) => contact.id === updatedContact.id);

      // Update the contact in the contacts array
      this.contacts[index] = updatedContact;

      // Update the Local Storage with the updated contacts array
      updateLocalStorage(this.contacts);

      // Use Vue Router to navigate back to the contact details view
      this.$router.push({ path: `/contact/${updatedContact.id}` });
    },
    cancelEdit() {
      // Use Vue Router to navigate back to the contact details view
      this.$router.back();
    },
  },
};
</script>
