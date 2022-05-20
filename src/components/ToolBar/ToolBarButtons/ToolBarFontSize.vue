<template>
  <div class="btn-group" role="group" aria-label="Font Size Selector">
    <button
      @click="decreaseFontSize"
      class="btn btn-outline-dark"
      type="button"
    >
      -
    </button>
    <select
      @change="updateFontSize"
      class="form-select"
      aria-label="Font Size Selector"
    >
      <option v-show="false" :value="selectedFontSize" selected>
        {{ selectedFontSize }}
      </option>
      <option
        v-for="fs in fontSizes"
        :key="fs"
        :value="fs"
        :selected="fs === selectedFontSize"
      >
        {{ fs }}
      </option>
    </select>
    <button
      @click="increaseFontSize"
      class="btn btn-outline-dark"
      type="button"
    >
      +
    </button>
  </div>
</template>

<script>
export default {
  name: 'tool-bar-font-size',
  props: {
    defaultFontSize: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      selectedFontSize: 18,
      fontSizes: [8, 9, 10, 11, 12, 14, 18, 24, 30, 36, 48, 60, 72, 96],
    };
  },
  created() {
    if (this.defaultFontSize) this.selectedFontSize = this.defaultFontSize;
  },
  methods: {
    saveFontSize() {
      this.$emit('save-font-size', this.selectedFontSize);
    },
    decreaseFontSize() {
      this.selectedFontSize -= 1;
      this.saveFontSize();
    },
    increaseFontSize() {
      this.selectedFontSize += 1;
      this.saveFontSize();
    },
    updateFontSize(fs) {
      const value = parseInt(fs.target.value);
      this.selectedFontSize = value;
      this.saveFontSize();
    },
  },
};
</script>
