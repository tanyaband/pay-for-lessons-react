import styles from "./styles.module.css";
import { Day } from "../Day/component";

const DAYS = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

export const CalendarPage = ({ year, month }) => {
  const firstDay = (new Date(year, month).getDay() + 6) % 7;
  const lastDate = new Date(year, month + 1, 0).getDate();
  const weeksNumber = Math.ceil((lastDate + firstDay) / 7);

  const getDate = (weekIndex, dayIndex) => {
    const day = weekIndex * 7 + dayIndex - firstDay + 1;
    if (day < 1 || day > lastDate) return undefined;
    return day;
  };

  return (
    <table className={styles.root}>
      <thead className={styles.head}>
        <tr>
          {DAYS.map((day, index) => (
            <th key={index}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...Array(weeksNumber)].map((item, weekIndex) => (
          <tr key={weekIndex}>
            {DAYS.map((day, dayIndex) => (
              <Day key={dayIndex} day={getDate(weekIndex, dayIndex)}></Day>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
