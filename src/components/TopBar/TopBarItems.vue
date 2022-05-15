<template>
  <div style="display: contents">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav" style="flex-grow: 0">
      <ul class="navbar-nav">
        <li
          v-for="item in menuItems"
          :key="item.path"
          class="nav-item text-center"
        >
          <top-bar-pages v-if="item.name === 'pages'" />
          <router-link
            v-else
            class="nav-link"
            :to="item.path"
            :class="{ active: $route.path === item.path }"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TopBarPages from './TopBarPages.vue';

export default {
  name: 'top-bar-items',
  components: { TopBarPages },
  data() {
    return {
      menuItems: [
        { name: 'Home', path: '/' },
        { name: 'Contact', path: '/contact' },
        { name: 'Pages', name: 'pages' },
        { name: 'Add Page', path: '/add' },
      ],
    };
  },
};
</script>
