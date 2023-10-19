import { observer } from "mobx-react";
import { CalendarTitle } from "./component";
import { monthStore } from "../../stores/month-store";

export const CalendarTitleContainer = observer(() => {
  return (
    <CalendarTitle
      year={monthStore.year}
      month={monthStore.month}
      nextMonth={() => monthStore.nextMonth()}
      prevMonth={() => monthStore.prevMonth()}
    />
  );
});
