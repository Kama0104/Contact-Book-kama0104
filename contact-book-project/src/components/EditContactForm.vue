<template>
  <form @submit.prevent="onSubmit">
    <h2>Edit Contact</h2>
    <div>
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" v-model="firstName" required />
    </div>
    <div>
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" v-model="lastName" required />
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />
    </div>
    <div>
      <button type="submit">Save Changes</button>
      <button type="button" @click="cancelEdit">Cancel</button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    contact: Object, // Contact object to edit
  },
  data() {
    return {
      firstName: this.contact.firstName,
      lastName: this.contact.lastName,
      email: this.contact.email,
    };
  },
  methods: {
    onSubmit() {
      // Validate the form data
      if (!this.firstName || !this.lastName || !this.email) {
        alert('Please fill in all required fields.');
        return;
      }

      // Create a copy of the edited contact object with the updated data
      const editedContact = {
        ...this.contact,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
      };

      // Emit an event to the parent component to handle the updated contact
      this.$emit('update-contact', editedContact);
    },
    cancelEdit() {
      // Emit an event to the parent component to cancel the edit and go back to the contact details view
      this.$emit('cancel-edit');
    },
  },
};
</script>
