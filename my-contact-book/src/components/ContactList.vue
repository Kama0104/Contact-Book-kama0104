
   <template>
    
    <div>
      <h2>Contact List</h2>
      <ul v-if="contacts.length > 0">
        <li v-for="contact in contacts" :key="contact.id">
          <router-link :to="{ name: 'ContactDetails', params: { id: contact.id }}">
            {{ contact.firstName }} {{ contact.lastName }}
          </router-link>
          <router-link :to="{ name: 'EditContact', params: { id: contact.id }}">Edit</router-link>
        </li>
      </ul>
      <p v-else>No contacts found.</p>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  import { getContacts } from '../utils';
  
  export default {
    setup() {
      const contacts = ref([]);
      contacts.value = getContacts().sort((a, b) => a.lastName.localeCompare(b.lastName));
      const hasContacts = computed(() => contacts.value.length > 0);
  
      return { contacts, hasContacts };
    },
  };
  </script>
  