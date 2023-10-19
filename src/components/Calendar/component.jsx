import { useState } from "react";
import { CalendarTitleContainer } from "../CalendarTitle/container";
import styles from "./styles.module.css";
import { MonthContainter } from "../Month/container";
import { Info } from "../Info/component";
import { UsersContainer } from "../Users/container";
import { Legend } from "../Legend/component";

export const Calendar = () => {
  return (
    <div className={styles.root}>
      <CalendarTitleContainer />
      <MonthContainter />
      <div className={styles.info}>
        <Info title="Ученики">
          <UsersContainer />
        </Info>
        <Info title="Легенда">
          <Legend />
        </Info>
      </div>
    </div>
  );
};
