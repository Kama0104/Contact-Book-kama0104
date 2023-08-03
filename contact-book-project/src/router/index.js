import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import ContactDetailsView from '@/views/ContactDetailsView.vue';
import NewContactView from '@/views/NewContactView.vue';
import EditContactView from '@/views/EditContactView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/contact/:id', component: ContactDetailsView, props: true },
  { path: '/new', component: NewContactView },
  { path: '/edit/:id', component: EditContactView, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
