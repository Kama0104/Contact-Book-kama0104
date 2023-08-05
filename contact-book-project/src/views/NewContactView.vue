<template>
  <div>
    <h2>New Contact</h2>
    <ContactForm :initialData="formData" @submit-form="submitForm" />
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';
import {updateLocalStorage, getContactsFromLocalStorage} from '../utils/LocalStorageUtils';

export default {
  components: {
    ContactForm,
  },
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        phone:'',
        address:'',
        notes:''
      },
      contacts: []
    };
  },
  methods: {
    submitForm(newContact) {
      const newId = Date.now().toString();
      newContact.id = newId;
      this.contacts.push(newContact);
      updateLocalStorage(this.contacts);
      this.$router.push({path: `/contact/${newId}`});
    },
  },
  created() {
    this.contacts = getContactsFromLocalStorage();
  }
};
</script>
