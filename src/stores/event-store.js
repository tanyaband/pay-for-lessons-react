import { makeAutoObservable, toJS, autorun } from "mobx";
import { monthStore } from "./month-store";

export const eventStore = makeAutoObservable({
  items: JSON.parse(localStorage.getItem("pfl_events")) || [],

  get monthEvents() {
    return this.items
      .filter(
        (item) =>
          item.year === monthStore.year && item.month === monthStore.month
      )
      .reduce((acc, item) => {
        const event = { userId: item.userId, type: item.type };
        if (acc[item.day]) acc[item.day].push(event);
        else acc[item.day] = [event];
        return acc;
      }, {});
  },

  hasEvents(userId) {
    return !!this.items.find((item) => item.userId === userId);
  },

  updateEvents(newEvents, day) {
    this.items = this.items.filter(
      (item) =>
        item.year !== monthStore.year ||
        item.month !== monthStore.month ||
        item.day !== day ||
        newEvents.find(
          (event) => event.userId === item.userId && event.type === item.type
        )
    );
    newEvents.forEach((element) => {
      if (
        !this.monthEvents[day]?.find(
          (item) => item.userId === element.userId && item.type === element.type
        )
      ) {
        this.items.push({
          year: monthStore.year,
          month: monthStore.month,
          day: day,
          userId: element.userId,
          type: element.type,
        });
      }
    });
  },

  deleteUserEvents(userId) {
    this.items = this.items.filter((item) => item.userId != userId);
  },
});

autorun(() => {
  localStorage.setItem("pfl_events", JSON.stringify(toJS(eventStore.items)));
});
