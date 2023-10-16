import { Button } from "../Button/component";
import styles from "./styles.module.css";
import { UserForm } from "../UserForm/component";
import { createPortal } from "react-dom";
import { useState } from "react";

export const User = ({ user, onDelete, onEdit }) => {
  const [showModal, setShowModal] = useState();
  return (
    <>
      <p className={styles.root}>
        {/* <input type="checkbox"></input> */}
        <span style={{ color: user.color }}>
          <i className="fa-regular fa-credit-card"></i>
        </span>
        <span style={{ color: user.color }}>
          <i className="fa-regular fa-circle-check"></i>
        </span>
        <span className={styles.name}>{user.name}</span>
        <Button onClick={() => setShowModal(true)}>
          <i className="fa-solid fa-pencil"></i>
        </Button>
        <Button onClick={onDelete}>
          <i className="fa-solid fa-xmark"></i>
        </Button>
      </p>
      {showModal &&
        createPortal(
          <UserForm
            title="Редактирование пользователя"
            user={user}
            onCancel={() => setShowModal(false)}
            onOk={(updatedUser) => {
              onEdit(updatedUser);
              setShowModal(false);
            }}
          />,
          document.getElementById("modal-container")
        )}
    </>
  );
};
