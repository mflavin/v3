import { defineStore } from 'pinia';
import { useRoute } from 'vue-router';

export const usePageData = defineStore({
  id: 'pagedata',
  state: () => ({
    pagedata: localStorage.getItem('pagedata')
      ? JSON.parse(localStorage.getItem('pagedata'))
      : {},
  }),
  getters: {
    getPages: state => {
      return Object.keys(state.pagedata).map(page => {
        return {
          name: `View ${page}`,
          path: `/view/${page}`,
          key: page,
        };
      });
    },
    currentpage: state => {
      const route = useRoute();
      const { id } = route.params;
      if (id) return state.pagedata[id];
      return {};
    },
  },
  actions: {
    save() {
      localStorage.setItem('pagedata', JSON.stringify(this.pagedata));
    },
    deletePage(id) {
      delete this.pagedata[id];
      localStorage.setItem('pagedata', JSON.stringify(this.pagedata));
    },
    add(id, selectedItem) {
      if (this.pagedata[id]) this.pagedata[id].push(selectedItem);
      else this.pagedata[id] = [selectedItem];
    },
    remove(id, item) {
      if (this.pagedata[id])
        this.pagedata[id] = this.pagedata[id].filter(x => x !== item);
    },
  },
});
