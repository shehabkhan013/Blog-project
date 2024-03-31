import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import AddBlogForm from '../components/AddBlogForm.vue';
import BlogDetail from '../components/BlogDetail.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/add', component: AddBlogForm },
  { path: '/blog/:id', component: BlogDetail, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
