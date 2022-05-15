<template>
  <figure v-if="isEditing">
    <delete-modal
      :item="item"
      :isEditing="isEditing"
      @delete-modal-clicked="$emit('delete-item')"
    />
    <label class="form-label w-100 px-4">
      Quote
      <textarea
        v-model="item.quote"
        @input="$emit('updateQuote', item.quote)"
        class="form-control"
      ></textarea>
    </label>
    <label class="form-label w-100 p-4">
      quotee
      <textarea
        v-model="item.quotee"
        @input="$emit('updateQuotee', item.quotee)"
        class="form-control"
      ></textarea>
    </label>
  </figure>
  <figure v-else>
    <blockquote class="blockquote p-4">
      <p>
        {{ item.quote || 'Default quote' }}
      </p>
    </blockquote>
    <figcaption class="blockquote-footer px-4 pb-4">
      {{ item.quotee || 'Default quotee' }}
    </figcaption>
  </figure>
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

<style scoped>
figure {
  background: lightgrey;
}
</style>
