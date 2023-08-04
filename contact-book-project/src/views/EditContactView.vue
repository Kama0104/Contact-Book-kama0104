<template>
  <div>
    <h2>Edit Contact</h2>
    <EditContactForm :contact="contact" @update-contact="updateContact" @cancel-edit="cancelEdit" />
  </div>
</template>

<script>
import EditContactForm from '@/components/EditContactForm.vue';
import { updateLocalStorage } from '@/utils/LocalStorageUtils.js';

export default {
  components: {
    EditContactForm,
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
  data() {
    return {
      contact: null,
    };
  },
  created() {
    
    const contactId = this.$route.params.id;
    this.contact = this.contacts.find((contact) => contact.id === contactId);
  },
  methods: {
    updateContact(updatedContact) {
      const index = this.contacts.findIndex((contact) => contact.id === updatedContact.id);
      this.contacts[index] = updatedContact;
      updateLocalStorage(this.contacts);
      this.$router.push({ path: `/contact/${updatedContact.id}` });
    },

    cancelEdit() {
      this.$router.back();
    },
  },
};
</script>
