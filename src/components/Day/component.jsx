import styles from "./styles.module.css";

export const Day = ({ day }) => {
  return <td className={day ? styles.root : ""}>{day}</td>;
};
