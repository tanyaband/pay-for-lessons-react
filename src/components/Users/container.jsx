import { createPortal } from "react-dom";
import { UserForm } from "../UserForm/component";
import { useState } from "react";
import { observer } from "mobx-react";
import { UserContainer } from "../User/container";
import { userStore } from "../../stores/user-store";
import styles from "./styles.module.css";
import { Button } from "../Button/component";

export const UsersContainer = observer(() => {
  const userIds = userStore.userIds;
  const [showModal, setShowModal] = useState();

  return (
    <>
      {userIds.map((userId) => (
        <UserContainer key={userId} userId={userId}></UserContainer>
      ))}
      <div className={styles.actions}>
        <Button onClick={() => setShowModal(true)} title="Добавить ученика">
          <i className="fa-solid fa-plus"></i>
        </Button>
      </div>
      {showModal &&
        createPortal(
          <UserForm
            title="Новый пользователь"
            onCancel={() => setShowModal(false)}
            onOk={(newUser) => {
              userStore.addUser(newUser);
              setShowModal(false);
            }}
          />,
          document.getElementById("modal-container")
        )}
    </>
  );
});
