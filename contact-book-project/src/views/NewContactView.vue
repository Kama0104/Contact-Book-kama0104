<template>
  <div>
    <h2>New Contact</h2>
    <ContactForm :initialData="formData" @submit-form="submitForm" />
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';

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
    };
  },
  methods: {
    submitForm(newContact) {
      console.log('New Contact Data:', newContact); 
      this.$emit('add-contact', newContact);
    },
  },
};
</script>
