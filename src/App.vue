<template>
  <div>
    <top-bar />
    <div class="container-sm mt-5">
      <router-view />
    </div>
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
