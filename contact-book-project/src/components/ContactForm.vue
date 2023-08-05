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
      this.$emit('submit-form', newContact);

      // Clear the form fields
      this.firstName = '';
      this.lastName = '';
      this.email = '';
    },
  },
};
</script>
<style>
form {
  margin-top: 20px;
}

div {
  margin-bottom: 10px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
