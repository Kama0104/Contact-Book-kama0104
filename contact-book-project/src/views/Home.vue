<template>
  <div>
    <h1>Contact Book</h1>
    <ContactList v-if="contacts" :contacts="sortedContacts" @show-details="showContactDetails" @delete-contact="deleteContact" />
    <div v-else>
      <p>No contacts found.</p>
    </div>
    <router-view
      :contacts="contacts"
      @add-contact="addContact"
      @update-contact="updateContact"
    ></router-view>
  </div>
</template>

<script>
import ContactList from '@/components/ContactList.vue';
import { computed } from 'vue';
import { getContactsFromLocalStorage, updateLocalStorage } from '@/utils/LocalStorageUtils';

export default {
  components: {
    ContactList,
  },
  props: {
    contacts: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every((contact) => (
          typeof contact === 'object' &&
          'id' in contact &&
          'firstName' in contact &&
          'lastName' in contact &&
          'email' in contact &&
          'phone' in contact &&
          'address' in contact &&
          'notes' in contact
        ));
      },
    },
  },
  computed: {
    sortedContacts() {
      if (this.contacts) {
        // Sort contacts 
        return this.contacts.sort((a, b) => a.lastName.localeCompare(b.lastName));
      } else {
        return [];
      }
    },
  },
  methods: {
    showContactDetails(contactId) {
      this.$router.push({ path: `/contact/${contactId}` });
    },
    deleteContact(contactId) {
      this.contacts = this.contacts.filter((contact) => contact.id !== contactId);

      // Update the Local Storage 
      updateLocalStorage(this.contacts);
    },
    addContact(newContact) {
      const newId = Date.now().toString();
      newContact.id = newId;
      this.contacts.push(newContact);
      updateLocalStorage(this.contacts);
      this.$router.push({ path: `/contact/${newId}` });
    },
  },
};
</script>
<style>
h1 {
  margin-bottom: 20px;
}
</style>