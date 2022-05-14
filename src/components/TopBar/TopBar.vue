<template>
  <nav class="navbar navbar-dark navbar-expand-lg headerBackground">
    <div class="container-fluid mx-sm-5">
      <div class="navbar-brand">
        <img
          src="/img/icons/android-chrome-512x512.png"
          class="rounded-3"
          alt="Sail Boat"
          height="100"
          width="100"
        />
        <span style="margin-left: 24px">Big Poppa's Boat</span>
      </div>
      <top-bar-items />
    </div>
  </nav>
</template>

<script>
import TopBarItems from './TopBarItems.vue';
import TopBarPages from './TopBarPages.vue';

export default {
  name: 'top-bar',
  components: { TopBarItems, TopBarPages },
};
</script>
