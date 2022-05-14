import { createRouter, createWebHistory } from 'vue-router';
const AddNewPage = () => import('@/views/AddNewPage.vue');
const ContactView = () => import('@/views/ContactView.vue');
const EditPage = () => import('@/views/EditPage.vue');
const HomeView = () => import('@/views/HomeView.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/add',
      name: 'addnewpage',
      component: AddNewPage,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },

    {
      path: '/edit/:id',
      name: 'editpage',
      component: EditPage,
    },
    {
      path: '/view/:id',
      name: 'viewpage',
      component: EditPage,
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
  ],
});

export default router;
