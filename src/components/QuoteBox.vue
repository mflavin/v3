<template>
  <figure v-if="isEditing">
    <button
      @click="$emit('delete-item')"
      type="button"
      class="btn btn-danger btn-sm float-end mb-1"
    >
      <icon-trash />
    </button>
    <label class="form-label w-100 px-4">
      Quote
      <textarea
        v-model="quote"
        @input="$emit('updateQuote', quote)"
        class="form-control"
      ></textarea>
    </label>
    <label class="form-label w-100 p-4">
      quotee
      <textarea
        v-model="quotee"
        @input="$emit('updateQuotee', quotee)"
        class="form-control"
      ></textarea>
    </label>
  </figure>
  <figure v-else>
    <blockquote class="blockquote p-4">
      <p>
        {{ quote || 'Default quote' }}
      </p>
    </blockquote>
    <figcaption class="blockquote-footer px-4 pb-4">
      {{ quotee || 'Default quotee' }}
    </figcaption>
  </figure>
</template>

<script>
import IconPencil from '@/components/icons/IconPencil.vue';
import IconTrash from '@/components/icons/IconTrash.vue';

export default {
  name: 'text-box',
  components: { IconPencil, IconTrash },
  props: {
    quote: {
      type: String,
      default: 'Default quote',
    },
    quotee: {
      type: String,
      default: 'Default quotee',
    },
    isEditing: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
figure {
  background: lightgrey;
}
</style>
