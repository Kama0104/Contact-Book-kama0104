<template>
  <div v-if="contact">
    <ContactDetails :contact="contact" />
    <div>
      <button @click="editContact">Edit</button>
      <button @click="deleteContact">Delete</button>
    </div>
  </div>
  <div v-else>
    <p>Contact not found.</p>
  </div>
</template>

<script>
import ContactDetails from '@/components/ContactDetails.vue';

export default {
  components: {
    ContactDetails,
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
    editContact() {
      // Use Vue Router to navigate to the edit contact view
      this.$router.push({ path: `/edit/${this.contact.id}` });
    },
    deleteContact() {
      // Emit an event to the parent component to delete the contact
      this.$emit('delete-contact', this.contact.id);
    },
  },
};
</script>
