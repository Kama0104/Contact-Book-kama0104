<template>
  <div>
    <h2>Contact List</h2>
    <ul class="contact-list">
      <li v-for="contact in sortedContacts" :key="contact.id">
        <span>{{ contact.firstName }} {{ contact.lastName }}</span>
        <button @click="showDetails(contact.id)">View Details</button>
        <button @click="deleteContact(contact.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    contacts: Array,
  },
  computed: {
    sortedContacts() {
      return this.contacts.slice().sort((a, b) => a.lastName.localeCompare(b.lastName));
    },
  },
  methods: {
    showDetails(contactId) {
      this.$emit('show-details', contactId);
    },
    deleteContact(contactId) {
      this.$emit('delete-contact', contactId);
    },
  },
};
</script>

<style>
.contact-list {
  list-style-type: none;
  padding: 0;
}

.contact-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.contact-list li span {
  flex: 1;
  margin-right: 10px;
}
</style>
