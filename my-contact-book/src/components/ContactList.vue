<!-- <template>
    <div>
      <h2>Contact List</h2>
      <ul>
        <li v-for="contact in sortedContacts" :key="contact.id">
          <router-link :to="{ name: 'ContactDetails', params: { id: contact.id }}">
            {{ contact.firstName }} {{ contact.lastName }}
          </router-link>
          <router-link :to="{ name: 'EditContact', params: { id: contact.id }}">Edit</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { reactive } from 'vue';
  import { getContacts } from '../utils';
  
  export default {
    setup() {
      const state = reactive({
        contacts: [],
      });
  
      // Fetch contacts from local storage and sort them by last name
      state.contacts = getContacts().sort((a, b) => a.lastName.localeCompare(b.lastName));
  
      return { state };
    },
  };
  </script>
   -->






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
  
      // Fetch contacts from local storage and sort them by last name
      contacts.value = getContacts().sort((a, b) => a.lastName.localeCompare(b.lastName));
  
      // Use computed property to determine if contacts are available
      const hasContacts = computed(() => contacts.value.length > 0);
  
      return { contacts, hasContacts };
    },
  };
  </script>
  