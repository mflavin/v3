import { defineStore } from 'pinia';

export const user = defineStore({
  id: 'user',
  state: () => ({
    user: {},
  }),
  getters: {
    userdata: state => state.user,
    isAdmin: state => state.user.isAdmin,
  },
  actions: {
    login() {
      this.user = {
        name: 'Big Poppa',
        email: 'bigpopppa@gmail.com',
        isAdmin: true,
      };
    },
    logout() {
      this.user = {};
    },
  },
});
