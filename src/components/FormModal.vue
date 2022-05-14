<template>
  <div>
    <div class="row text-center m-4">
      <div class="col">
        <!-- Button trigger modal -->
        <button
          :disabled="!$route.params.id"
          :class="$route.params.id ? 'btn-primary' : 'btn-outline-secondary'"
          type="button"
          class="btn"
          data-bs-toggle="modal"
          data-bs-target="#FormComponentModal"
        >
          Add Section
        </button>
      </div>
      <div class="col">
        <button @click="save()" type="button" class="btn btn-success mx-4">
          Save Page
        </button>
        <button @click="deletePage()" type="button" class="btn btn-danger mx-4">
          Delete This Page
        </button>
      </div>
    </div>

    <!-- Modal -->
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
              data-bs-toggle="modal"
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
export default {
  name: 'form-modal',
  data() {
    return {
      selectedItem: '',
      sectionOptions: [
        { title: 'Header', key: 'header' },
        { title: 'Text Box', key: 'text' },
        { title: 'Quote Box', key: 'quote' },
      ],
    };
  },
  methods: {
    save() {
      const page = usePageData();
      page.save();
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
