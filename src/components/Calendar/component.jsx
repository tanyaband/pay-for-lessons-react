import { useState } from "react";
import { CalendarTitle } from "../CalendarTitle/component";
import styles from "./styles.module.css";
import { CalendarPage } from "../CalendarPage/component";
import { Info } from "../Info/component";
import { Users } from "../Users/component";
import { Legend } from "../Legend/component";

export const Calendar = () => {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());

  const nextMonth = () => {
    if (month == 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  };

  const prevMonth = () => {
    if (month == 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  };

  return (
    <div className={styles.root}>
      <CalendarTitle
        year={year}
        month={month}
        nextMonth={nextMonth}
        prevMonth={prevMonth}
      />
      <CalendarPage year={year} month={month} />
      <div className={styles.info}>
        <Info title="Ученики">
          <Users />
        </Info>
        <Info title="Легенда">
          <Legend />
        </Info>
      </div>
    </div>
  );
};
