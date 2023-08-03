<template>
    <!-- Edit contact form here -->
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
        // Handle form submission and edit the contact
      },
    },
  };
  </script>
  