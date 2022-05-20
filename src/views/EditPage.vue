<template>
  <div>
    <page-actions />
    <page-renderer />
  </div>
</template>

<script>
import PageRenderer from '@/components/PageRenderer.vue';
import PageActions from '@/components/PageActions.vue';

export default {
  name: 'edit-page',
  components: { PageRenderer, PageActions },
};
</script>
