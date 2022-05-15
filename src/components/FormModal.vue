<template>
  <div
    class="d-flex"
    :class="isEditing ? 'justify-content-between' : 'justify-content-end'"
    style="margin-top: -30px"
    :style="isEditing ? 'margin-bottom: 100px' : ''"
  >
    <delete-modal
      :item="{ title: 'page', key: 'deletePage' }"
      :isEditing="isEditing"
      @delete-modal-clicked="deletePage()"
    />

    <!-- Button trigger modal -->
    <button
      v-if="isEditing"
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#FormComponentModal"
    >
      Add Section
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

    <!-- Add Section Modal -->
    <div
      class="modal fade"
      id="FormComponentModal"
      tabindex="-1"
      aria-labelledby="FormComponentModal"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="FormComponentModal">New Section</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <select
              v-model="selectedItem"
              class="form-select"
              aria-label="Default select example"
            >
              <option value="">Open this select menu</option>
              <option
                v-for="item in sectionOptions"
                :key="item.key"
                :value="item"
              >
                {{ item.title }}
              </option>
            </select>
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
              :disabled="!selectedItem"
              @click="addPageData()"
              :class="selectedItem ? 'btn-primary' : 'btn-outline-secondary'"
              type="button"
              class="btn"
            >
              Add Section
            </button>
          </div>
        </div>
      </div>
    </div>
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
  name: 'form-modal',
  components: { IconCancel, IconPencil, IconSave, IconTrash, DeleteModal },
  data() {
    return {
      selectedItem: '',
      sectionOptions: [
        { title: 'Header', text: '' },
        { title: 'Text Box', text: '' },
        { title: 'Quote Box', quote: '', quotee: '' },
      ],
    };
  },
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
    addPageData() {
      if (this.selectedItem) {
        const { id } = this.$route.params;
        const page = usePageData();
        page.add(id, this.selectedItem);
      }
    },
  },
};
</script>
