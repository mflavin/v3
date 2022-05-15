<template>
  <div>
    <!-- Delete Button trigger modal -->
    <button
      v-if="isEditing"
      type="button"
      class="btn btn-danger mx-2"
      :class="{ 'float-end': item && item.title !== 'page' }"
      data-bs-toggle="modal"
      :data-bs-target="`#deleteModal${item.key}`"
    >
      <icon-trash />
    </button>

    <!-- Delete Modal -->
    <div
      v-if="isEditing"
      class="modal fade"
      :id="`deleteModal${item.key}`"
      tabindex="-1"
      aria-labelledby="deleteModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="deleteModalLabel">
              Delete This {{ item.title }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            Are you sure you want to delete this {{ item.title }}?
          </div>
          <div class="modal-footer justify-content-between">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              @click="$emit('delete-modal-clicked')"
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconTrash from '@/components/icons/IconTrash.vue';

export default {
  name: 'form-modal',
  components: { IconTrash },
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
