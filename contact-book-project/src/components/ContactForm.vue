<template>
  <form @submit.prevent="onSubmit">
    <h2>Add New Contact</h2>
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
      <button type="submit">Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
    };
  },
  methods: {
    onSubmit() {
      // Validate the form data
      if (!this.firstName || !this.lastName || !this.email) {
        alert('Please fill in all required fields.');
        return;
      }

      // Create a new contact 
      const newContact = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
      };

      // for new contact submission
      this.$emit('add-contact', newContact);

      // Clear the form fields
      this.firstName = '';
      this.lastName = '';
      this.email = '';
    },
  },
};
</script>
