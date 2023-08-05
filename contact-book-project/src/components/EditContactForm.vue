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
    contact: Object,
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
      if (!this.firstName || !this.lastName || !this.email) {
        alert('Please fill in all required fields.');
        return;
      }
      const editedContact = {
        ...this.contact,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
      };
      this.$emit('update-contact', editedContact);
    },
    cancelEdit() {
      this.$emit('cancel-edit');
    },
  },
};
</script>
<style>
h2 {
  margin-bottom: 20px;
}
</style>
