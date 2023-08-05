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
  props: ['id'],

  data() {
    return {
      contact: null,
    };
  },
  created() {
    // Get the contact ID from the route params
    const contactId = this.$route.params.id;
    this.contact = getContactsFromLocalStorage().find((contact) => this.contact.id === contactId);
  },
  methods: {
    editContact() {
      this.$router.push({ path: `/edit/${this.contact.id}` });
    },
    deleteContact() {
      this.$emit('delete-contact', this.contact.id);
    },
  },
};
</script>
