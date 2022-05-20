<template>
  <div
    class="d-flex my-4"
    :class="isEditing ? 'justify-content-between' : 'justify-content-end'"
  >
    <delete-modal
      :item="{ title: 'page', key: 'deletePage' }"
      :isEditing="isEditing"
      @delete-modal-clicked="deletePage()"
    />

    <!-- Button trigger modal -->
    <button
      v-if="isEditing"
      @click="addNewTextBox()"
      type="button"
      class="btn btn-primary"
    >
      Add Text Box
    </button>

    <button
      v-if="isEditing"
      @click="
        savePage();
        viewPage();
      "
      type="button"
      class="btn btn-secondary"
    >
      <icon-cancel />
    </button>
    <button v-else @click="editPage()" type="button" class="btn btn-success">
      <icon-pencil />
    </button>
  </div>
</template>

<script>
import { usePageData } from '@/stores/pagedata';
import IconCancel from '@/components/icons/IconCancel.vue';
import IconPencil from '@/components/icons/IconPencil.vue';
import IconSave from '@/components/icons/IconSave.vue';
import IconTrash from '@/components/icons/IconTrash.vue';
import DeleteModal from '@/components/DeleteModal.vue';

export default {
  name: 'page-actions',
  components: { IconCancel, IconPencil, IconSave, IconTrash, DeleteModal },
  computed: {
    sectionOptions() {
      const page = usePageData();
      return page.sectionOptions;
    },
    isEditing() {
      const { name } = this.$route;
      return name === 'editpage';
    },
  },
  methods: {
    savePage() {
      const page = usePageData();
      page.save();
    },
    viewPage() {
      const { id } = this.$route.params;
      this.$router.push(`/view/${id}`);
    },
    editPage() {
      const { id } = this.$route.params;
      this.$router.push(`/edit/${id}`);
    },
    deletePage() {
      const { id } = this.$route.params;
      const page = usePageData();
      page.deletePage(id);
      this.$router.push('/add');
    },
    addNewTextBox() {
      const { id } = this.$route.params;
      const page = usePageData();
      page.add(id);
    },
  },
};
</script>
