import styles from "./styles.module.css";

export const Day = ({ day, children }) => {
  return (
    <td className={day ? styles.root : ""}>
      {day}
      {children}
    </td>
  );
};
