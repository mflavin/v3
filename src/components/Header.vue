<template>
  <div v-if="isEditing" class="mb-3">
    <delete-modal
      :item="item"
      :isEditing="isEditing"
      @delete-modal-clicked="$emit('delete-item')"
    />
    <label class="form-label w-100">
      Header
      <input
        v-model="item.text"
        @input="$emit('updateText', item.text)"
        type="text"
        class="form-control form-control-lg"
      />
    </label>
  </div>
  <h1 v-else class="display-6 py-4">{{ item.text || 'Default Header' }}</h1>
</template>

<script>
import DeleteModal from '@/components/DeleteModal.vue';

export default {
  name: 'text-box',
  components: { DeleteModal },
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
};
</script>
