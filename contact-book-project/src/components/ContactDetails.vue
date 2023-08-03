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
    contact: {
      type: Object,
      required: true,
      validator: (value) => {
        // Validate the structure of the contact object
        return (
          typeof value === 'object' &&
          'id' in value &&
          'firstName' in value &&
          'lastName' in value &&
          'email' in value &&
          'phone' in value &&
          'address' in value &&
          'notes' in value
        );
      },
    },
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
<style>
.contact-details {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.contact-details p {
  margin: 5px 0;
}

.contact-details button {
  margin-top: 10px;
}
</style>
