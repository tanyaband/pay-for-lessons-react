import { Button } from "../Button/component";
import styles from "./styles.module.css";

export const User = ({ user, onDelete, onEdit }) => {
  return (
    <p className={styles.root}>
      {/* <input type="checkbox"></input> */}
      <span style={{ color: user.color }}>
        <i className="fa-regular fa-credit-card"></i>
      </span>
      <span style={{ color: user.color }}>
        <i className="fa-regular fa-circle-check"></i>
      </span>
      <span className={styles.name}>{user.name}</span>
      <Button onClick={onEdit}>
        <i className="fa-solid fa-pencil"></i>
      </Button>
      <Button onClick={onDelete}>
        <i className="fa-solid fa-xmark"></i>
      </Button>
    </p>
  );
};
