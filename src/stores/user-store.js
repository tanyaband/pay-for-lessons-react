import { v4 as uuidv4 } from "uuid";
import { makeAutoObservable } from "mobx";

const savedUsers = JSON.parse(localStorage.getItem("pfl_users")) || [];

export const userStore = makeAutoObservable({
  items: savedUsers.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {}),

  ids: savedUsers.map(({ id }) => id),

  get userIds() {
    return this.ids;
  },

  getUserById(userId) {
    return this.items[userId];
  },

  addUser(user) {
    const id = uuidv4();
    this.items[id] = { id, ...user };
    this.ids.push(id);
  },

  deleteUser(userId) {
    delete this.items[userId];
    this.ids.splice(this.ids.indexOf(userId), 1);
  },

  editUser(user) {
    this.items[user.id] = user;
  },
});
