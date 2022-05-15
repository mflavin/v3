<template>
  <div>
    <div v-for="item in getPageData" :key="item.key">
      <Header
        v-if="item.title === 'Header'"
        :isEditing="isEditing"
        :item="item"
        @updateText="item.text = $event"
        @delete-item="deletePageData(item)"
      />
      <TextBox
        v-if="item.title === 'Text Box'"
        :isEditing="isEditing"
        :item="item"
        @updateText="item.text = $event"
        @delete-item="deletePageData(item)"
      />
      <QuoteBox
        v-if="item.title === 'Quote Box'"
        :isEditing="isEditing"
        :item="item"
        @updateQuote="item.quote = $event"
        @updateQuotee="item.quotee = $event"
        @delete-item="deletePageData(item)"
      />
    </div>
  </div>
</template>

<script>
import { usePageData } from '@/stores/pagedata';
import Header from './Header.vue';
import TextBox from './TextBox.vue';
import QuoteBox from './QuoteBox.vue';

export default {
  name: 'form-loader',
  components: { Header, TextBox, QuoteBox },
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
