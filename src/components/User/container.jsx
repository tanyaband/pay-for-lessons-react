import { User } from "./component";
import { UserForm } from "../UserForm/component";
import { createPortal } from "react-dom";
import { useState } from "react";
import { observer } from "mobx-react";
import { userStore } from "../../stores/user-store";

export const UserContainer = observer(({ userId }) => {
  const [showModal, setShowModal] = useState();
  const user = userStore.getUserById(userId);

  return (
    <>
      <User
        user={user}
        onDelete={() => userStore.deleteUser(userId)}
        onEdit={() => setShowModal(true)}
      ></User>
      {showModal &&
        createPortal(
          <UserForm
            title="Редактирование пользователя"
            user={user}
            onCancel={() => setShowModal(false)}
            onOk={(newUser) => {
              userStore.editUser(newUser);
              setShowModal(false);
            }}
          />,
          document.getElementById("modal-container")
        )}
    </>
  );
});
