<template>
  <div v-if="isEditing" class="mb-3">
    <button
      @click="$emit('delete-item')"
      type="button"
      class="btn btn-danger btn-sm float-end"
      style="margin-bottom: -16px;"
    >
      <IconTrash />
    </button>
    <label class="form-label w-100">
      Header
      <input v-model="title" type="text" class="form-control form-control-lg" />
    </label>
  </div>
  <h1 v-else class="display-6 pt-4">{{ title }}</h1>
</template>

<script>
import IconPencil from '@/components/icons/IconPencil.vue';
import IconTrash from '@/components/icons/IconTrash.vue';

export default {
  name: 'text-box',
  components: { IconPencil, IconTrash },
  props: {
    title: {
      type: String,
      default: 'Default Header',
    },
    isEditing: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
