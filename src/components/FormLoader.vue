<template>
  <div>
    <div v-for="comp in getPageData" :key="comp">
      <Header
        v-if="comp.key === 'header'"
        :isEditing="isEditing"
        :title="comp.title"
        @updateTitle="comp.title = $event"
        @delete-item="deletePageData(comp)"
      />
      <TextBox
        v-if="comp.key === 'text'"
        :isEditing="isEditing"
        :text="comp.text"
        @updateText="comp.text = $event"
        @delete-item="deletePageData(comp)"
      />
      <QuoteBox
        v-if="comp.key === 'quote'"
        :isEditing="isEditing"
        :quote="comp.quote"
        :quotee="comp.quotee"
        @updateQuote="comp.quote = $event"
        @updateQuotee="comp.quotee = $event"
        @delete-item="deletePageData(comp)"
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
