<template>
  <div v-if="isEditing" class="mb-3">
    <button
      @click="$emit('delete-item')"
      type="button"
      class="btn btn-danger btn-sm float-end"
      style="margin-bottom: -16px"
    >
      <icon-trash />
    </button>
    <label class="form-label w-100">
      Text Box
      <textarea
        v-model="text"
        @input="$emit('updateText', text)"
        class="form-control"
        rows="3"
      ></textarea>
    </label>
  </div>
  <p v-else class="lead">{{ text || 'Default Text' }}</p>
</template>

<script>
import IconPencil from '@/components/icons/IconPencil.vue';
import IconTrash from '@/components/icons/IconTrash.vue';

export default {
  name: 'text-box',
  components: { IconPencil, IconTrash },
  props: {
    text: {
      type: String,
      default: 'Default Text',
    },
    isEditing: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
