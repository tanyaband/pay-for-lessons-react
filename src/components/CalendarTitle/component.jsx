import styles from "./styles.module.css";
import { Button } from "../Button/component";

const MONTHS = [
  "январь",
  "февраль",
  "март",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "октябрь",
  "ноябрь",
  "декабрь",
];

export const CalendarTitle = ({ year, month, nextMonth, prevMonth }) => {
  return (
    <div className={styles.root}>
      <span>{year}</span>
      <span>{MONTHS[month]}</span>
      <div className={styles.actions}>
        <Button onClick={prevMonth}>
          <i className="fa-solid fa-arrow-left-long fa-xs"></i>
        </Button>
        <Button onClick={nextMonth}>
          <i className="fa-solid fa-arrow-right-long fa-xs"></i>
        </Button>
      </div>
    </div>
  );
};
