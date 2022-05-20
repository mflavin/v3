<template>
  <select
    @change="saveFontStyle"
    class="d-inline form-select"
    aria-label="Font Style Selector"
  >
    <option
      v-for="fs in fontStyles"
      :key="fs"
      :value="fs.value"
      :selected="fs === selectedFontStyle"
    >
      {{ fs.text }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'tool-bar-font-style',
  props: {
    defaultFontFamily: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      selectedFontStyle: {
        text: 'Arial',
        value: 'Arial, Helvetica Neue, Helvetica, sans-serif',
      },
      fontStyles: [
        {
          text: 'Arial',
          value: 'Arial, Helvetica Neue, Helvetica, sans-serif',
        },
        {
          text: 'Calibri',
          value: 'Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif',
        },
        {
          text: 'Cambria',
          value: 'Cambria, Georgia, serif',
        },
        {
          text: 'Franklin Gothic Medium',
          value:
            'Franklin Gothic Medium, Franklin Gothic, ITC Franklin Gothic, Arial, sans-serif',
        },
        {
          text: 'Futura',
          value: 'Futura, Trebuchet MS, Arial, sans-serif',
        },
        {
          text: 'Helvetica',
          value: 'Helvetica Neue, Helvetica, Arial, sans-serif',
        },
        {
          text: 'Times New Roman',
          value:
            'TimesNewRoman, Times New Roman, Times, Baskerville, Georgia, serif',
        },
        {
          text: 'Comic Sans ???',
          value: 'Brush Script MT, cursive',
        },
      ],
    };
  },
  created() {
    if (this.defaultFontFamily) {
      this.selectedFontStyle = this.fontStyles.find(
        fs => fs.value === this.defaultFontFamily,
      );
    }
  },
  methods: {
    saveFontStyle(fs) {
      const { value } = fs.target;
      this.selectedFontStyle = value;
      this.$emit('save-font-style', this.selectedFontStyle);
    },
  },
};
</script>
