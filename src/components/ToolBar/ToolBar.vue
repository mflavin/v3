<template>
  <div class="container">
    <div class="row mb-2">
      <div class="col-6 col-md-3">
        <tool-bar-font-style
          :defaultFontFamily="selectedFontStyle"
          @save-font-style="saveFontStyle"
        />
      </div>
      <div class="col-6 col-md-auto">
        <tool-bar-font-size
          :defaultFontSize="selectedFontSize"
          @save-font-size="saveFontSize"
          class="me-1"
        />
      </div>
      <div class="col-2 col-md-auto mt-2 mt-md-0">
        <button
          @click="toggleBold()"
          class="btn btn-outline-dark"
          :class="{ active: boldSelected }"
          type="button"
        >
          <icon-bold></icon-bold>
        </button>
      </div>
      <div class="col-2 col-md-auto mt-2 mt-md-0">
        <button
          @click="toggleItalic()"
          class="btn btn-outline-dark"
          :class="{ active: italicSelected }"
          type="button"
        >
          <icon-italic></icon-italic>
        </button>
      </div>
      <div class="col-2 col-md-auto mt-2 mt-md-0">
        <button
          @click="toggleUnderline()"
          class="btn btn-outline-dark"
          :class="{ active: underlineSelected }"
          type="button"
        >
          <icon-underline></icon-underline>
        </button>
      </div>

      <!-- TODO: add align buttons -->
      <!-- <div class="col-2 col-md-auto">
        <button
          @click="toggleBold()"
          class="btn btn-outline-dark"
          :class="{ active: boldSelected }"
          type="button"
        >
          <icon-bold></icon-bold>
        </button>
      </div>
      <div class="col-2 col-md-auto">
        <button
          @click="toggleItalic()"
          class="btn btn-outline-dark"
          :class="{ active: italicSelected }"
          type="button"
        >
          <icon-italic></icon-italic>
        </button>
      </div>
      <div class="col-2 col-md-auto">
        <button
          @click="toggleUnderline()"
          class="btn btn-outline-dark"
          :class="{ active: underlineSelected }"
          type="button"
        >
          <icon-underline></icon-underline>
        </button>
      </div> -->
    </div>
  </div>
</template>

<script>
import {
  IconBold,
  IconImage,
  IconItalic,
  IconLink,
  IconUnderline,
} from '@/components/icons';
import {
  ToolBarFontSize,
  ToolBarFontStyle,
} from '@/components/ToolBar/ToolBarButtons';

export default {
  name: 'tool-bar',
  components: {
    IconBold,
    IconImage,
    IconItalic,
    IconLink,
    IconUnderline,
    ToolBarFontSize,
    ToolBarFontStyle,
  },
  props: {
    defaultStyles: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      styling: {},
      selectedFontStyle: null,
      selectedFontSize: null,
      boldSelected: false,
      italicSelected: false,
      underlineSelected: false,
    };
  },
  watch: {
    styling: {
      handler(s) {
        this.$emit('save-styling', s);
      },
      deep: true,
    },
  },
  created() {
    const ds = this.defaultStyles;
    if (ds) {
      this.styling = ds;
      if (ds['font-size']) {
        const parsedSize = parseInt(ds['font-size'].split('px')[0]);
        this.selectedFontSize = parsedSize;
      }
      if (ds['font-family']) this.selectedFontStyle = ds['font-family'];
      if (ds['font-weight']) this.boldSelected = true;
      if (ds['font-style']) this.italicSelected = true;
      if (ds['text-decoration']) this.underlineSelected = true;
    }
  },
  methods: {
    saveFontStyle(style) {
      this.selectedFontStyle = style;
      this.styling['font-family'] = style;
    },
    saveFontSize(size) {
      this.selectedFontSize = size;
      this.styling['font-size'] = `${size}px`;
    },
    toggleBold() {
      this.boldSelected = !this.boldSelected;
      if (this.boldSelected) this.styling['font-weight'] = 'bold';
      else delete this.styling['font-weight'];
    },
    toggleItalic() {
      this.italicSelected = !this.italicSelected;
      if (this.italicSelected) this.styling['font-style'] = 'italic';
      else delete this.styling['font-style'];
    },
    toggleUnderline() {
      this.underlineSelected = !this.underlineSelected;
      if (this.underlineSelected) this.styling['text-decoration'] = 'underline';
      else delete this.styling['text-decoration'];
    },
  },
};
</script>
