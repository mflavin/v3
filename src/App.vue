<template>
  <div class="d-flex flex-column min-vh-100">
    <top-bar />
    <div class="container-sm my-sm-5" style="background: #f5f5f5">
      <router-view />
    </div>
    <footer class="footer mt-auto py-3 headerBackground border-top">
      <div class="container-sm mx-sm-5">
        <span class="text-white">
          &copy; 2019 - {{ new Date().getFullYear() }} Big Poppa, Inc
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import { TopBar } from '@/components/TopBar';

export default {
  components: { TopBar },
};
</script>

<style>
/* @import '@/assets/base.css'; */
body {
  --bs-body-bg: #eee;
}
.headerBackground {
  background: #2c3e50;
}
.lead {
  margin: 24px 0px;
}
</style>
