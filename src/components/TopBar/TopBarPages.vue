<template>
  <li class="nav-item text-center dropdown">
    <a
      :disabled="!getPageItems.length"
      class="nav-link dropdown-toggle"
      href="#"
      id="navbarDarkDropdownMenuLink"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Pages
    </a>
    <ul
      class="dropdown-menu dropdown-menu-dark"
      aria-labelledby="navbarDarkDropdownMenuLink"
    >
      <li v-for="item in getPageItems" :key="item.key">
        <router-link class="dropdown-item" :to="item.path">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </li>
</template>

<script>
import { usePageData } from '@/stores/pagedata';

export default {
  name: 'top-bar-pages',
  computed: {
    getPageItems() {
      const page = usePageData();
      return page.getPages;
    },
  },
};
</script>
