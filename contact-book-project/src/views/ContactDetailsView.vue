<template>
  <!-- Display the ContactDetails component here -->
  <button @click="editContact">Edit</button>
  <button @click="deleteContact">Delete</button>
</template>

<script>
import ContactDetails from '@/components/ContactDetails';

export default {
  components: {
    ContactDetails,
  },
  methods: {
    editContact() {
      // Navigate to the edit contact view
    },
    deleteContact() {
      // Handle deleting the contact
    },
  },
};
</script>
