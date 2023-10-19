import styles from "./styles.module.css";

export const LessonForm = ({ title }) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h3>{title}</h3>
      </div>
    </div>
  );
};
