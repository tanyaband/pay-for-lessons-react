import { makeAutoObservable } from "mobx";
import { monthStore } from "./month-store";
import { computedFn } from "mobx-utils";

export const lessonStore = makeAutoObservable({
  items: [
    {
      year: 2023,
      month: 9,
      day: 18,
      user: "89f11bba-a815-4db8-a8c7-dab70c8f3110",
    },
    {
      year: 2023,
      month: 9,
      day: 18,
      user: "56f41c11-e940-497c-9406-20a4aa3d1808",
    },
  ],

  get lessonsOfMonth() {
    return this.items
      .filter(
        (item) =>
          item.year === monthStore.year && item.month === monthStore.month
      )
      .reduce((acc, item) => {
        if (acc[item.day]) acc[item.day].push(item.user);
        else acc[item.day] = [item.user];
        return acc;
      }, {});
  },

  getDayLessons: computedFn(function (date) {
    return this.lessonsOfMonth[date];
  }),
});
