<template>
  <div>
    <h1 class="display-6 py-4">Add New Page</h1>
    <div class="input-group mt-3">
      <input
        v-model="pagename"
        type="text"
        class="form-control"
        placeholder="Page Name"
        aria-label="Page Name"
        aria-describedby="basic-addon2"
      />
      <div class="input-group-append">
        <button
          @click="addPageData()"
          :disabled="!pagename"
          :class="pagename ? 'btn-success' : 'btn-outline-secondary'"
          class="btn"
          type="button"
        >
          Button
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { usePageData } from '@/stores/pagedata';

export default {
  name: 'add-new-page',
  data() {
    return {
      pagename: '',
    };
  },
  methods: {
    addPageData() {
      if (this.pagename) {
        const page = usePageData();
        page.add(this.pagename, {});
        this.$router.push(`/view/${this.pagename}`);
      }
    },
  },
};
</script>
