<template>
  <div v-for="item in getPageData" :key="item.key">
    <text-box
      :isEditing="isEditing"
      :item="item"
      @update-style="item.style = $event"
      @update-text="item.text = $event"
      @delete-item="deletePageData(item)"
    ></text-box>
  </div>
</template>

<script>
import { usePageData } from '@/stores/pagedata';
import TextBox from './TextBox.vue';

export default {
  name: 'page-renderer',
  components: { TextBox },
  computed: {
    getPageData() {
      const page = usePageData();
      return page.currentpage;
    },
    isEditing() {
      const { name } = this.$route;
      return name === 'editpage';
    },
  },
  methods: {
    deletePageData(item) {
      if (item) {
        const { id } = this.$route.params;
        const page = usePageData();
        page.remove(id, item);
      }
    },
  },
};
</script>
