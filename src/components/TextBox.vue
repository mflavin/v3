<template>
  <div v-if="isEditing" class="mb-3">
    <delete-modal
      :item="item"
      :isEditing="isEditing"
      @delete-modal-clicked="$emit('delete-item')"
    />
    <label class="form-label w-100">
      Text Box
      <textarea
        v-model="item.text"
        @input="$emit('updateText', item.text)"
        class="form-control"
        rows="3"
      ></textarea>
    </label>
  </div>
  <p v-else class="lead">{{ item.text || 'Default Text' }}</p>
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
