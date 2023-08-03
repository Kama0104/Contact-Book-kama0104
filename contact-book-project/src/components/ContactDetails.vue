<template>
  <div v-if="contact">
    <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
    <p><strong>Email:</strong> {{ contact.email }}</p>
    <p><strong>Phone:</strong> {{ contact.phone }}</p>
    <p><strong>Address:</strong> {{ contact.address }}</p>
    <p><strong>Notes:</strong> {{ contact.notes }}</p>
    <button @click="editContact">Edit</button>
    <button @click="deleteContact">Delete</button>
  </div>
  <div v-else>
    <p>Contact not found.</p>
  </div>
</template>

<script>
export default {
  props: {
    contact: Object, // Contact object
  },
  methods: {
    editContact() {
      this.$emit('edit-contact', this.contact.id);
    },
    deleteContact() {
      //  to delete the contact
      this.$emit('delete-contact', this.contact.id);
    },
  },
};
</script>
