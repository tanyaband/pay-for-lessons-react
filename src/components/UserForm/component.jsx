import { useState } from "react";
import { Button } from "../Button/component";
import styles from "./styles.module.css";

const DEFAULT_FORM = {
  name: "",
  color: "#B74803",
};

export const UserForm = ({ title, onCancel, onOk, user }) => {
  const [form, setForm] = useState(user || DEFAULT_FORM);
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h3>{title}</h3>
        <div>
          <p className={styles.line}>
            <label>Имя:</label>
            <input
              value={form.name}
              onChange={(event) =>
                setForm({ ...form, name: event.target.value })
              }
            />
          </p>
          <p className={styles.line}>
            <label>Цвет иконок:</label>
            <input
              type="color"
              value={form.color}
              onChange={(event) =>
                setForm({ ...form, color: event.target.value })
              }
            />
          </p>
        </div>
        <div className={styles.actions}>
          <Button disabled={!form.name} onClick={() => onOk(form)}>
            Ok
          </Button>
          <Button onClick={onCancel}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};
