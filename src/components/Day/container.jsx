import { Day } from "./component";
import { userStore } from "../../stores/user-store";
import { observer } from "mobx-react";
import { monthStore } from "../../stores/month-store";
import { lessonStore } from "../../stores/lesson-store";

export const DayContainer = observer(({ day }) => {
  const lessons = lessonStore.getDayLessons(day);
  return (
    <Day day={day}>
      {lessons &&
        lessons.map((item) => (
          <div key={item}>
            <span style={{ color: userStore.getUserById(item).color }}>
              <i className="fa-regular fa-circle-check"></i>
            </span>
          </div>
        ))}
    </Day>
  );
});
