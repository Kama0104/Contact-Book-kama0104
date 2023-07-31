import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { saveContacts } from './utils'; // Make sure the import statement is correct

// Create a new Vue app instance
const app = createApp(App);

// Use Vue Router in the app
app.use(router);

// Mount the app to the DOM
app.mount('#app');
