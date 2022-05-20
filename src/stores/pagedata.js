import { defineStore } from 'pinia';
import { useRoute } from 'vue-router';

const getData = () => {
  const data = localStorage.getItem('pagedata');
  if (data) {
    const parseData = JSON.parse(data);
    if (parseData && Object.keys(parseData).length) return parseData;
  }
  return false;
};

export const usePageData = defineStore({
  id: 'pagedata',
  state: () => ({
    sectionOptions: [
      { text: '', style: { 'font-size': '18px' } },
    ],
    pagedata: getData() ? getData() : {},
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
      if (id && state.pagedata[id]) return state.pagedata[id];
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
    add(id) {
      const selectedItem = this.sectionOptions[0];
      const key = { key: Math.random().toString().split('.')[1] };
      const newItem = { ...selectedItem, ...key };
      if (this.pagedata[id]) this.pagedata[id].push(newItem);
      else this.pagedata[id] = [newItem];
    },
    remove(id, item) {
      if (id && item && Object.keys(item).length && this.pagedata[id])
        this.pagedata[id] = this.pagedata[id].filter(x => x !== item);
    },
  },
});
