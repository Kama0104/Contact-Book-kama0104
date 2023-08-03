<template>
  <div>
    <h2>Contacts</h2>
    <ul>
      <li v-for="contact in sortedContacts" :key="contact.id" @click="showContactDetails(contact)">
        {{ contact.firstName }} {{ contact.lastName }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    contacts: Array, // array of contacts
  },
  computed: {
    sortedContacts() {
      // Sorting contacts by last name
      return this.contacts.sort((a, b) => a.lastName.localeCompare(b.lastName));
    },
  },
  methods: {
    showContactDetails(contact) {
      this.$emit('show-details', contact.id);
    },
  },
};
</script>
