<template>
  <div v-if="isEditing" class="mb-3">
    <delete-modal
      class="d-flex justify-content-end mb-2 mt-4"
      :item="item"
      :isEditing="isEditing"
      @delete-modal-clicked="$emit('delete-item')"
    ></delete-modal>

    <tool-bar
      :defaultStyles="item.style"
      @save-styling="updateStyle"
    ></tool-bar>

    <textarea
      v-model="item.text"
      :style="item.style"
      @input="updateText"
      class="form-control form-control-lg"
      rows="3"
    ></textarea>
  </div>
  <div
    v-else
    style="overflow-wrap: anywhere; white-space: pre-wrap"
    :style="item.style"
  >
    {{ item.text || 'Default Text' }}
  </div>
</template>

<script>
import DeleteModal from '@/components/DeleteModal.vue';
import { ToolBar } from '@/components/ToolBar';

export default {
  name: 'text-box',
  components: {
    DeleteModal,
    ToolBar,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    isEditing: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    updateStyle(newStyle) {
      this.$emit('update-style', newStyle);
    },
    updateText(newText) {
      this.$emit('update-text', newText.target.value);
    },
  },
};
</script>
