import { createRouter, createWebHistory } from 'vue-router';
import ContactList from './components/ContactList.vue';
import ContactDetails from './components/ContactDetails.vue';
import ContactForm from './components/ContactForm.vue';

const routes = [
  { path: '/', component: ContactList },
  { path: '/contact/:id', component: ContactDetails },
  { path: '/new', component: ContactForm },
  { path: '/edit/:id', component: ContactForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
