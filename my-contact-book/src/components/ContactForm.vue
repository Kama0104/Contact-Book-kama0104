<template>
    <div>
      <h2>{{ formType === 'edit' ? 'Edit Contact' : 'New Contact' }}</h2>
      <form @submit="submitForm">
        <label>
          First Name:
          <input v-model="formData.firstName" type="text" required />
        </label>
        <label>
          Last Name:
          <input v-model="formData.lastName" type="text" required />
        </label>
        <label>
          Email:
          <input v-model="formData.email" type="email" required />
        </label>
        <button type="submit">{{ formType === 'edit' ? 'Update' : 'Add' }} Contact</button>
      </form>
    </div>
  </template>
  
  <script>
  import { reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import { getContactById, addContact, updateContact } from '../utils';
  
  export default {
    props: {
      formType: {
        type: String,
        required: true,
        validator: (value) => ['new', 'edit'].includes(value),
      },
    },
    setup(props) {
      const route = useRouter();
      const contactId = route.params.id;
      const contact = contactId ? getContactById(contactId) : null;
  
      const formData = reactive({
        firstName: contact ? contact.firstName : '',
        lastName: contact ? contact.lastName : '',
        email: contact ? contact.email : '',
      });
  
      // to submit the form
      const submitForm = (event) => {
        event.preventDefault();
        if (props.formType === 'new') {
          addContact(formData);
        } else if (props.formType === 'edit' && contactId) {
          updateContact(contactId, formData);
        }
        route.push({ name: 'ContactDetails', params: { id: contactId } });
      };
  
      return { formData, submitForm };
    },
  };
  </script>
  