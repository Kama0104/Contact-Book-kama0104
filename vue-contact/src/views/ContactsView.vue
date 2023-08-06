<script setup>
import ContactCreator from '../components/ContactCreator.vue';
import { ref } from 'vue';
import {uid} from 'uid';
import ContactItem from '../components/ContactItem.vue';
import { Icon } from '@iconify/vue';
const contactList = ref([]);


const fetchContactList = () => {
  const savedContactList = JSON.parse(localStorage.getItem("contactList"));
  if(savedContactList) {
    contactList.value = savedContactList;
  }
};


fetchContactList();


const setContactLocalStorage = () => {
  localStorage.setItem("contactList",  JSON.stringify(contactList.value));
};


const createContact = (contact) => {
  contactList.value.push({
    id: uid(),
    contact,
    isCompleted: null,
    isEditing: null,
   });
   setContactLocalStorage();
};

const toggleContactComplete = (contactPos) => {
  contactList.value[contactPos].isCompleted = !contactList.value[contactPos].isCompleted;
  setContactLocalStorage();
}

const toggleEditContact = (contactPos) => {
  contactList.value[contactPos].isEditing = !contactList.value[contactPos].isEditing;
  setContactLocalStorage();
};

const updateContact = (contactVal, contactPos) => {
  contactList.value[contactPos].contact = contactVal;
  setContactLocalStorage();
}
const deleteContact=(contactId) => {
  contactList.value = contactList.value.filter((contact)=> contact.id !==contactId);
  setContactLocalStorage();

};
</script>

<template>
  <main>
    <h1>Create Contact</h1>
    <ContactCreator @create-contact="createContact" />
    <ul class="contact-list" v-if="contactList.length > 0" >
      <ContactItem v-for="(contact, index) in contactList" 
      :contact="contact" 
      :index="index" 
      @toggle-complete="toggleContactComplete"
      @edit-contact="toggleEditContact"
      @update-contact="updateContact"
      @delete-contact="deleteContact"

      />
    </ul>
    <p class="contacts-msg" v-else>
      <Icon icon="noto-v1:sad-but-relieved-face" width="22"/>
      You have no contacts! Add one!
    </p>
  </main>
</template>


<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;

  h1 {
    margin-bottom: 16px;
    text-align: center;
  }
}
</style>